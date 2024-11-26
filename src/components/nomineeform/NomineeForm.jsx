import React, { useState } from "react";
import "./NomineeForm.css";

const NominationForm = () => {
    const [formData, setFormData] = useState({
        nominee: {
          fullName: "",
          title: "",
          organization: "",
          phone: "",
          email: "",
          address: "",
        },
        nominator: {
          fullName: "",
          relationship: "",
          phone: "",
          email: "",
        },
        awardDetails: {
          category: "",
          reason: "",
        },
        supportingInfo: {
          contributions: "",
          achievements: "",
          communityImpact: "",
          duration: "",
        },
        consent: {
          nomineeConsent: false,
          nominatorDeclaration: false,
        },
        supportingDocs: null,
        submission: {
          deadline: "",
          submitTo: "",
          contact: "",
        },
      });
    
      const handleChange = (e) => {
        const { name, value, checked, type, files } = e.target;
        const keys = name.split(".");
    
        setFormData((prev) => {
          let temp = { ...prev };
          let current = temp;
    
          for (let i = 0; i < keys.length - 1; i++) {
            current = current[keys[i]];
          }
    
          if (type === "checkbox") {
            current[keys[keys.length - 1]] = checked;
          } else if (type === "file") {
            current[keys[keys.length - 1]] = files;
          } else {
            current[keys[keys.length - 1]] = value;
          }
    
          return temp;
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        // Add submission logic here
      };
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h2 className="form-title">Nomination Form</h2>

            <section className="form-section">
                <h3 className="section-title">Section 1: Nominee Information</h3>
                <input
                    type="text"
                    name="nominee.fullName"
                    placeholder="Full Name"
                    className="input-field"
                    value={formData.nominee.fullName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="nominee.title"
                    placeholder="Title/Position"
                    className="input-field"
                    value={formData.nominee.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="nominee.organization"
                    placeholder="Organization"
                    className="input-field"
                    value={formData.nominee.organization}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="nominee.phone"
                    placeholder="Phone"
                    className="input-field"
                    value={formData.nominee.phone}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="nominee.email"
                    placeholder="Email"
                    className="input-field"
                    value={formData.nominee.email}
                    onChange={handleChange}
                />
                <textarea
                    name="nominee.address"
                    placeholder="Address"
                    className="textarea-field"
                    value={formData.nominee.address}
                    onChange={handleChange}
                ></textarea>
            </section>

            <section className="form-section">
                <h3 className="section-title">Section 2: Nominator Information</h3>
                <input
                    type="text"
                    name="nominator.fullName"
                    placeholder="Full Name"
                    className="input-field"
                    value={formData.nominator.fullName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="nominator.relationship"
                    placeholder="Relationship to Nominee"
                    className="input-field"
                    value={formData.nominator.relationship}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="nominator.phone"
                    placeholder="Phone"
                    className="input-field"
                    value={formData.nominator.phone}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="nominator.email"
                    placeholder="Email"
                    className="input-field"
                    value={formData.nominator.email}
                    onChange={handleChange}
                />
            </section>

            <section className="form-section">
                <h3 className="section-title">Section 3: Award Details</h3>
                <input
                    type="text"
                    name="awardDetails.category"
                    placeholder="Award Category"
                    className="input-field"
                    value={formData.awardDetails.category}
                    onChange={handleChange}
                />
                <textarea
                    name="awardDetails.reason"
                    placeholder="Reason for Nomination"
                    className="textarea-field"
                    value={formData.awardDetails.reason}
                    onChange={handleChange}
                ></textarea>
            </section>

            <section className="form-section">
                <h3 className="section-title">Section 4: Supporting Information</h3>
                <textarea
                    name="supportingInfo.contributions"
                    placeholder="Contributions"
                    className="textarea-field"
                    value={formData.supportingInfo.contributions}
                    onChange={handleChange}
                ></textarea>
                <textarea
                    name="supportingInfo.achievements"
                    placeholder="Achievements"
                    className="textarea-field"
                    value={formData.supportingInfo.achievements}
                    onChange={handleChange}
                ></textarea>
                <textarea
                    name="supportingInfo.communityImpact"
                    placeholder="Community Impact"
                    className="textarea-field"
                    value={formData.supportingInfo.communityImpact}
                    onChange={handleChange}
                ></textarea>
                <textarea
                    name="supportingInfo.duration"
                    placeholder="Duration"
                    className="textarea-field"
                    value={formData.supportingInfo.duration}
                    onChange={handleChange}
                ></textarea>
            </section>

            <section className="form-section">
                <h3 className="section-title">Section 5: Supporting Documents</h3>
                <input
                    type="file"
                    name="supportingDocs"
                    className="file-input"
                    onChange={handleChange}
                    multiple
                />
            </section>

            <section className="form-section last-section">
                <h3 className="section-title">Section 6: Consent and Declaration</h3>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="consent.nomineeConsent"
                        className="checkbox-input"
                        checked={formData.consent.nomineeConsent}
                        onChange={handleChange}
                    />
                    I confirm that the nominee has given consent to be nominated.
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="consent.nominatorDeclaration"
                        className="checkbox-input"
                        checked={formData.consent.nominatorDeclaration}
                        onChange={handleChange}
                    />
                    I declare that the information provided is accurate to the best of my knowledge.
                </label>
            </section>

            {/* Section 7: Submission */}
            <section className="form-section">
                <h3 className="section-title">Section 7: Submission</h3>
                <label className="label">
                    Submission Deadline:
                    <input
                        type="date"
                        name="submission.deadline"
                        className="input-field"
                        value={formData.submission.deadline}
                        onChange={handleChange}
                    />
                </label>
                <label className="label">
                    Submit To:
                    <input
                        type="text"
                        name="submission.submitTo"
                        className="input-field"
                        value={formData.submission.submitTo}
                        onChange={handleChange}
                    />
                </label>
                <label className="label">
                    Contact for Questions:
                    <input
                        type="text"
                        name="submission.contact"
                        className="input-field"
                        value={formData.submission.contact}
                        onChange={handleChange}
                    />
                </label>
            </section>

            <section className="submit-button-group">
            <button type="submit" className="submit-button">
                Submit
            </button>
            </section>
        </form>
    );
};

export default NominationForm;
