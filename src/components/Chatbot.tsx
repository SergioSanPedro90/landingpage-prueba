import { useEffect } from 'react';

export const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      if (window.voiceflow && window.voiceflow.chat && typeof window.voiceflow.chat.load === 'function') {
        window.voiceflow.chat.load({
          verify: { projectID: '68f5137e1da80f90260486e1' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          // opcional: especificar render mode si quieres embebido:
          // render: {
          //   mode: 'embedded',
          //   target: document.getElementById('voiceflow-chat-container'),
          // },
          voice: {
            url: "https://runtime-api.voiceflow.com"
          }
        });
      } else {
        console.warn('Voiceflow chat API not available');
      }
    };

    document.body.appendChild(script);

    return () => {
      // Limpieza: opcionalmente eliminar el script
      document.body.removeChild(script);
    };
  }, []);

  return null; // o un <div id="voiceflow-chat-container" /> si embebido
};
