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
import "../../../OmniGPTIntegrations.json";
import { useEffect } from "react";
import { useState } from "react";

const Frame5 = () => {
  const [integration, setIntegrations] = useState([]);
  useEffect(() => {
    const integrationData = () => {
      fetch(
        "https://omnigpt-integrations-default-rtdb.firebaseio.com/Movie.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setIntegrations(data);
        })
        .catch((error) => {
          // Handle any error that occurred during the fetch process
          console.error("Error fetching data:", error);
          // Optionally, you can set a default value for 'integrations' or handle the error in another way
          setIntegrations([]);
        });
    };
    integrationData();
  });

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
