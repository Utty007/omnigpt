import Style from "./Frame5.module.css";
import whatsappLogo from "../../../Images/whatsapp-Logo.png";
import slackLogo from "../../../Images/logos_slack-icon.png";
import chromeLogo from "../../../Images/chrome-Logo.png";
import trelloLogo from "../../../Images/trello-Logo.png";
import jiraLogo from "../../../Images/jira-Logo.png";
import notionLogo from "../../../Images/notion-Logo.png";
import googleLogo from "../../../Images/google-Logo.png";
import githubLogo from "../../../Images/github-Logo.png";
import lineLogo from "../../../Images/lineLogo.png";

const Frame5 = () => {
  const integration = [
    {
      id: 1,
      integrationName: "WhatsApp",
      integrationDetail:
        "Connect your WhatsApp account to easily send and receive messages directly with OmniGPT.",
    },
    {
      id: 2,
      integrationName: "Slack",
      integrationDetail:
        "Connect your OmniGPT account to Slack and start collaborating with your team right away.",
    },
    {
      id: 3,
      integrationName: "Chrome Extension",
      integrationDetail:
        "Install the OmniGPT extension on your Chrome browser to access our AI right from your browser window.",
    },
    {
      id: 4,
      integrationName: "Line",
      integrationDetail:
        "Connect OmniGPT with Line to start collaborating with your team and automate your workflow.",
    },
    {
      id: 5,
      integrationName: "Trello",
      integrationDetail:
        "Automate your Trello boards with OmniGPT and manage your team's tasks more efficiently.",
    },
    {
      id: 6,
      integrationName: "Jira",
      integrationDetail:
        "Connect OmniGPT with Jira and automate your team's workflow to improve efficiency and productivity.",
    },
    {
      id: 7,
      integrationName: "Google Workspace",
      integrationDetail:
        "Integrate OmniGPT with your Google Workspace account to streamline your workflow and enhance team collaboration.",
    },
    {
      id: 8,
      integrationName: "Notion",
      integrationDetail:
        "Integrate OmniGPT with Notion to automate your workflow and collaborate with your team more effectively.",
    },
    {
      id: 9,
      integrationName: "GitHub",
      integrationDetail:
        "Use OmniGPT to automate your GitHub workflow and streamline your team's development process.",
    },
  ];

  const integrationImage = [
    {
      image: whatsappLogo,
    },
    {
      image: slackLogo,
    },
    {
      image: chromeLogo,
    },
    {
      image: lineLogo,
    },
    {
      image: trelloLogo,
    },
    {
      image: jiraLogo,
    },
    {
      image: googleLogo,
    },
    {
      image: notionLogo,
    },
    {
      image: githubLogo,
    },
  ];

  const transformedData = integration.map((integration, index) => {
    return {
      id: integration.id,
      integrationName: integration.integrationName,
      integrationDetail: integration.integrationDetail,
      integrationImage: integrationImage[index].image,
    };
  });

  const Integrations = transformedData;
  return (
    <div className={Style.Frame5}>
      <h1 className={Style.mainHeader} data-aos="fade-up">
        <span>Integrations</span> to Boost <br /> Your Workflow
      </h1>

      <div className={Style.Integrations}>
        {Integrations.map((integrations, index) => {
          return (
            <div
              key={integrations.id}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-duration="1000"
            >
              <div className={Style.integrationHeader}>
                <img src={integrations.integrationImage} />
                <h3>{integrations.integrationName}</h3>
              </div>
              <div>
                <p className={Style.integrationDetail}>
                  {integrations.integrationDetail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Frame5;
