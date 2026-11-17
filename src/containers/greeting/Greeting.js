import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  const whatsappLink =
    "https://wa.me/918178557544?text=Hello%20Samarpan%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.";

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2
                  className="greeting-nickname"
                  style={{ color: theme.imageHighlight || "#0284c7" }}
                >
                  {greeting.nickname}
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>

              {/* Stats Highlights */}
              {greeting.stats && (
                <div className="greeting-stats-row">
                  {greeting.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="greeting-stat-card"
                      style={{
                        backgroundColor: theme.highlight,
                        color: theme.text,
                      }}
                    >
                      <span className="greeting-stat-val">{stat.value}</span>
                      <span className="greeting-stat-lbl">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Call to Actions */}
              <div className="greeting-actions-row">
                <a
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="greeting-btn-primary"
                  style={{
                    backgroundColor: theme.text,
                    color: theme.body,
                  }}
                >
                  <span role="img" aria-label="document">
                    📄
                  </span>{" "}
                  Download Resume
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="greeting-btn-whatsapp"
                >
                  <span role="img" aria-label="chat">
                    💬
                  </span>{" "}
                  Chat on WhatsApp
                </a>
                <a
                  href="#featured-projects"
                  className="greeting-btn-secondary"
                  style={{
                    backgroundColor: theme.body,
                    color: theme.text,
                    borderColor: theme.headerColor,
                  }}
                >
                  <span role="img" aria-label="rocket">
                    🚀
                  </span>{" "}
                  View Projects
                </a>
              </div>

              <SocialMedia theme={theme} />
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
