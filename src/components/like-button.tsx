import { ThumbsUpIcon } from "lucide-react";
import { Button } from "./button";
import { ComponentProps, MouseEvent } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toogleLike } from "@/http/toggle-like";
import type { IssueInteractionsResponseSchema } from "@/api/routes/schemas/issue-interactions";
import { z } from "zod";

type IssueInteractions = z.infer<typeof IssueInteractionsResponseSchema>;

export interface LikeButtonProps extends ComponentProps<typeof Button> {
  issueId: string;
  initialLikes: number;
  initialLiked?: boolean;
}

export function LikeButton({
  issueId,
  initialLikes,
  initialLiked,
  ...props
}: LikeButtonProps) {
  const queryClient = useQueryClient();
  const { mutate: onToogleLike, isPending } = useMutation({
    mutationFn: () => toogleLike({ issueId }),
    onMutate: async () => {
      const previousData = queryClient.getQueriesData<IssueInteractions>({
        queryKey: ["issue-likes"]
      });
      queryClient.setQueriesData<IssueInteractions>(
        {queryKey: ["issue-likes"]},
        (old) => {
          if (!old) return undefined;
          return {
            ...old,
            interactions: old.interactions.map((interaction) => {
              if (interaction.issueId === issueId) {
                return {
                  ...interaction,
                  isLiked: !interaction.isLiked,
                  likesCount: interaction.isLiked
                    ? interaction.likesCount - 1
                    : interaction.likesCount + 1
                };
              }
              return interaction;
            })
          };
        }
      );
      return { previousData };
    },
    onError: async (err, _, context) => {
      if (context?.previousData) {
      for(const [queryKey, data] of context.previousData) {
          queryClient.setQueryData<IssueInteractions>(
          queryKey,
          data
        );
      }
      }
    }
  });

  function handleToogleLike(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    onToogleLike();
  }

  const liked = initialLiked;

  return (
    <Button
      data-liked={liked}
      className="data-[liked=true]:bg-indigo-600 data-[liked=true]:text-white data-[liked=true]:hover:bg-indigo-500"
      aria-label={liked ? "Unlike" : "Like"}
      disabled={isPending}
      onClick={handleToogleLike}
      {...props}
    >
      <ThumbsUpIcon className="size-3" />
      <span className="text-sm">{initialLikes}</span>
    </Button>
  );
}
