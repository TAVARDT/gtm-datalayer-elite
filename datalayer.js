/**
 * TAVARDT Elite DataLayer Utility
 * Description: Standardized and safe way to push events to Google Tag Manager.
 */

window.dataLayer = window.dataLayer || [];

const TavardtPulse = {
    /**
     * Push a standardized event to the DataLayer
     * @param {string} eventName 
     * @param {object} eventData 
     */
    pushEvent: function(eventName, eventData = {}) {
        const payload = {
            event: eventName,
            ...eventData,
            tavardt_timestamp: new Date().toISOString(),
            tavardt_origin: window.location.hostname
        };
        
        console.log(`[TAVARDT] Pushing event: ${eventName}`, payload);
        window.dataLayer.push(payload);
    },

    /**
     * Standardized Lead Event for B2B conversion
     * @param {string} formId 
     * @param {string} leadType 
     */
    trackLead: function(formId, leadType = 'contact') {
        this.pushEvent('tavardt_lead', {
            form_id: formId,
            lead_type: leadType,
            event_category: 'conversion',
            event_action: 'form_submission'
        });
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = TavardtPulse;
}
