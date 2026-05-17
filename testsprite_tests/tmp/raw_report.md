
# TestSprite AI Testing Report(MCP)

---

## 1️⃣ Document Metadata
- **Project Name:** nextstep-careers
- **Date:** 2026-05-18
- **Prepared by:** TestSprite AI Team

---

## 2️⃣ Requirement Validation Summary

#### Test TC001 Homepage navigation reaches contact
- **Test Code:** [TC001_Homepage_navigation_reaches_contact.py](./TC001_Homepage_navigation_reaches_contact.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/1df3220d-6f28-4f39-8e5c-78f934f70979/ae23e400-631e-418f-a7f1-16d4ba247e4b
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC002 Homepage navigation reaches the about page
- **Test Code:** [TC002_Homepage_navigation_reaches_the_about_page.py](./TC002_Homepage_navigation_reaches_the_about_page.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/1df3220d-6f28-4f39-8e5c-78f934f70979/f22cfdeb-d1a8-48d5-ab63-5b7b43a16a18
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC003 Submit a complete contact inquiry
- **Test Code:** [TC003_Submit_a_complete_contact_inquiry.py](./TC003_Submit_a_complete_contact_inquiry.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/1df3220d-6f28-4f39-8e5c-78f934f70979/25bbfdd3-f120-437d-b6de-3bf48ef0a7c9
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC004 Homepage navigation reaches services
- **Test Code:** [TC004_Homepage_navigation_reaches_services.py](./TC004_Homepage_navigation_reaches_services.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/1df3220d-6f28-4f39-8e5c-78f934f70979/1080a330-9a5a-42b0-9bbf-ac63607edf8d
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC005 Homepage CTA leads to the contact path
- **Test Code:** [TC005_Homepage_CTA_leads_to_the_contact_path.py](./TC005_Homepage_CTA_leads_to_the_contact_path.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/1df3220d-6f28-4f39-8e5c-78f934f70979/852784a6-859d-4f3c-81b1-9eeefbac5cdd
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC006 Homepage navigation reaches pricing
- **Test Code:** [TC006_Homepage_navigation_reaches_pricing.py](./TC006_Homepage_navigation_reaches_pricing.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/1df3220d-6f28-4f39-8e5c-78f934f70979/3b9c505b-9b13-4c5f-b07f-aac5f870d96d
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC007 Show validation when the form is submitted empty
- **Test Code:** [TC007_Show_validation_when_the_form_is_submitted_empty.py](./TC007_Show_validation_when_the_form_is_submitted_empty.py)
- **Test Error:** TEST FAILURE

Submitting the contact form with required fields left empty resulted in a successful submission message instead of validation feedback.

Observations:
- The page displayed '✅ Message sent! We'll get back to you within 24 hours.' after the Send Message action.
- Required fields (Full Name, Email Address, Message, Service) were present but empty when the success confirmation appeared.
- No validation error messages were shown and the submission was not blocked.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/1df3220d-6f28-4f39-8e5c-78f934f70979/98bc5075-36b6-452f-a906-20e4f1863b90
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC008 Homepage navigation reaches portfolio
- **Test Code:** [TC008_Homepage_navigation_reaches_portfolio.py](./TC008_Homepage_navigation_reaches_portfolio.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/1df3220d-6f28-4f39-8e5c-78f934f70979/8853627c-307d-410a-9476-5f62a551b632
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC009 Homepage navigation reaches process
- **Test Code:** [TC009_Homepage_navigation_reaches_process.py](./TC009_Homepage_navigation_reaches_process.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/1df3220d-6f28-4f39-8e5c-78f934f70979/b362082e-e2c5-409d-ba80-ff92bb3ca9c4
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC010 Services page content can be reviewed
- **Test Code:** [TC010_Services_page_content_can_be_reviewed.py](./TC010_Services_page_content_can_be_reviewed.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/1df3220d-6f28-4f39-8e5c-78f934f70979/314b790c-ba2b-495f-a9f2-ea43c4713c69
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC011 Pricing page content can be reviewed
- **Test Code:** [TC011_Pricing_page_content_can_be_reviewed.py](./TC011_Pricing_page_content_can_be_reviewed.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/1df3220d-6f28-4f39-8e5c-78f934f70979/e93c22eb-5580-40f2-8a3e-ae548bc4dbf7
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC012 Require a name before submitting the contact form
- **Test Code:** [TC012_Require_a_name_before_submitting_the_contact_form.py](./TC012_Require_a_name_before_submitting_the_contact_form.py)
- **Test Error:** TEST FAILURE

Submitting the contact form with the Full Name field left blank was not blocked — the form was accepted and a success message displayed.

Observations:
- After submitting the form with Full Name empty, the page showed '✅ Message sent! We'll get back to you within 24 hours.'
- No validation error or message indicating the Full Name is required was visible on the page.
- The Full Name input element was not present in the visible interactive elements list while other form controls (phone, selects, message, send button) were present.

- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/1df3220d-6f28-4f39-8e5c-78f934f70979/7c624b34-0f97-486d-9808-192684c11964
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC013 Require an email before submitting the contact form
- **Test Code:** [TC013_Require_an_email_before_submitting_the_contact_form.py](./TC013_Require_an_email_before_submitting_the_contact_form.py)
- **Test Error:** TEST FAILURE

The contact form allowed submission without an email — leaving the Email Address field blank did not produce validation feedback and the message was sent.

Observations:
- After submitting the form with the Email field blank, the page showed '✅ Message sent! We'll get back to you within 24 hours.'
- No validation error or 'required' message was visible near the Email Address field.
- The form submission succeeded instead of being blocked for missing email.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/1df3220d-6f28-4f39-8e5c-78f934f70979/0c1ca43a-1a1d-4ab5-8743-e9857336939b
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC014 Homepage proof-of-work section is discoverable
- **Test Code:** [TC014_Homepage_proof_of_work_section_is_discoverable.py](./TC014_Homepage_proof_of_work_section_is_discoverable.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/1df3220d-6f28-4f39-8e5c-78f934f70979/0271a733-0a4c-45d2-b134-e79df01891a9
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC015 Require a message before submitting the contact form
- **Test Code:** [TC015_Require_a_message_before_submitting_the_contact_form.py](./TC015_Require_a_message_before_submitting_the_contact_form.py)
- **Test Error:** TEST FAILURE

The contact form allowed submission without a Message and did not show validation feedback.

Observations:
- The page displayed a green success confirmation: '✅ Message sent! We'll get back to you within 24 hours.'
- The Message textarea remained empty after submission.
- No inline validation error (for example 'Message is required' or 'Please enter') was visible near the Message field.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/1df3220d-6f28-4f39-8e5c-78f934f70979/6f69901b-cc66-4aec-9ac2-c35b684273f0
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---


## 3️⃣ Coverage & Matching Metrics

- **73.33** of tests passed

| Requirement        | Total Tests | ✅ Passed | ❌ Failed  |
|--------------------|-------------|-----------|------------|
| ...                | ...         | ...       | ...        |
---


## 4️⃣ Key Gaps / Risks
{AI_GNERATED_KET_GAPS_AND_RISKS}
---