import { ArchiveIcon, MessageCircleIcon, ThumbsUp } from "lucide-react";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { Button } from "@/components/button";
export default function Home() {
  return (
    <div className="max-w-[1620px] w-full mx-auto p-10 h-dvh">
      <div />
      <main className="grid grid-cols-4 gap-5 flex-1 items-stretch">
        <Section.Root>
          <Section.Header>
            <Section.Title>
              <ArchiveIcon />
              Backlog
            </Section.Title>
            <Section.IssueCount>16</Section.IssueCount>
          </Section.Header>
          <Section.Content></Section.Content>
        </Section.Root>
        <Card.Root>
          <Card.Header>
            <Card.Number>0004545e</Card.Number>
            <Card.Title>Implementar cartao de credito</Card.Title>
            <Card.Footer>
              <Button >
                <ThumbsUp className="size-3" />
                <span className="text-sm">12</span>
              </Button>
              <Button>
                <MessageCircleIcon className="size-3" />
                <span className="text-sm">6</span>
              </Button>
            </Card.Footer>
          </Card.Header>
        </Card.Root>
      </main>
    </div>
  );
}
