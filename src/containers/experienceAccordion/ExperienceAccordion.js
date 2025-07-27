import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import {
  SimpleAccordion,
  SimplePanel,
} from "../../components/SimpleAccordion/SimpleAccordion.js";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        <SimpleAccordion>
          {this.props.sections.map((section, sectionIndex) => {
            return (
              <SimplePanel
                title={section["title"]}
                key={String(sectionIndex)}
                initialExpanded={sectionIndex < 4}
                theme={theme}
              >
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard
                      key={index}
                      index={index}
                      totalCards={section["experiences"].length}
                      experience={experience}
                      theme={theme}
                    />
                  );
                })}
              </SimplePanel>
            );
          })}
        </SimpleAccordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
