import { useEffect } from "react";
import { useState } from "react";

import Image from "../../../Constants/Image";
import Style from "./Frame5.module.css";

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
        });
    };
    integrationData();
  });

  const integrationImage = [
    {
      image: Image.whatsappLogo,
    },
    {
      image: Image.slackLogo,
    },
    {
      image: Image.chromeLogo,
    },
    {
      image: Image.lineLogo,
    },
    {
      image: Image.trelloLogo,
    },
    {
      image: Image.jiraLogo,
    },
    {
      image: Image.googleLogo,
    },
    {
      image: Image.notionLogo,
    },
    {
      image: Image.githubLogo,
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
                <img src={integrations.integrationImage} alt="..." />
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
