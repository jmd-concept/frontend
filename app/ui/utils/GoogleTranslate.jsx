
'use client';

import { useEffect } from 'react';

const GoogleTranslate = () => {
    useEffect(() => {
        // Load Google Translate script
        const script = document.createElement('script');
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;

        // Define the initialization function
        window.googleTranslateElementInit = () => {
            if (window.google && window.google.translate) {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'fr',
                        includedLanguages: 'en,fr',
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                        autoDisplay: false
                    },
                    'google_translate_element'
                );
            }
        };

        document.body.appendChild(script);

        return () => {
            // Cleanup
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
            delete window.googleTranslateElementInit;
        };
    }, []);

    return <div id="google_translate_element" className='absolute'></div>;
};

export default GoogleTranslate;