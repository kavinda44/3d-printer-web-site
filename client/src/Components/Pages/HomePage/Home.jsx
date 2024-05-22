import React, { Component } from 'react';

export class Home extends Component {
  componentDidMount() {
    // Create a script element for the configuration
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "u0B1OE1F0aOeiu9CN2lqI",
        domain: "www.chatbase.co"
      }
    `;
    // Append the configuration script to the body
    document.body.appendChild(configScript);

    // Create the main script element
    const mainScript = document.createElement('script');
    mainScript.src = 'https://www.chatbase.co/embed.min.js';
    mainScript.setAttribute('chatbotId', 'u0B1OE1F0aOeiu9CN2lqI');
    mainScript.setAttribute('domain', 'www.chatbase.co');
    mainScript.defer = true;

    // Append the main script to the body
    document.body.appendChild(mainScript);

    // Cleanup function to remove the scripts when the component unmounts
    this.cleanupScripts = () => {
      document.body.removeChild(configScript);
      document.body.removeChild(mainScript);
    };
  }

  componentWillUnmount() {
    if (this.cleanupScripts) {
      this.cleanupScripts();
    }
  }

  render() {
    return (
      <div>
      .
      </div>
    );
  }
}

export default Home;
