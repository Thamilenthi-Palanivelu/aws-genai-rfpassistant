import { useState } from "react";
import BaseAppLayout from "../../../components/base-app-layout";
import Sessions from "../../../components/chatdirect/sessions";
import { BreadcrumbGroup } from "@cloudscape-design/components";
import { CHATBOT_NAME } from "../../../common/constants";
import useOnFollow from "../../../common/hooks/use-on-follow";

export default function ChatSessionPage() {
  const [toolsOpen, setToolsOpen] = useState(false);
  const onFollow = useOnFollow();

  return (
    <BaseAppLayout
      contentType="table"
      toolsOpen={toolsOpen}
      onToolsChange={(e) => setToolsOpen(e.detail.open)}
      breadcrumbs={
        <BreadcrumbGroup
          onFollow={onFollow}
          items={[
            {
              text: CHATBOT_NAME,
              href: "/",
            },
            {
              text: "Sessions",
              href: "/chatbot/chat-sessions",
            },
          ]}
        />
      }
      content={<Sessions toolsOpen={true} />}
    />
  );
}
