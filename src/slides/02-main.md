# Statistic
**12%** Adults in the Indonesia live with a disability

---

# Why this topic matter
To exclude **no one**.

---

# Web Accessibility 

> The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.
>
<cite>Tim Berners-Lee, W3C Director and inventor of the World Wide Web</cite>

---


# We still failed.
> There are ~279 Level A and ~106 Level AA cases accessibility errors can be found on web pages.
>
<cite>Tenon.io research on 2018</cite>

---

# Types of Users (with Disability)
* **Vision:** Low vision, color blind, blind, cataracts
* **Hearing:** Hard of hearing, deaf, hear infection
* **Mobility:** Broken arm, spinal cord injury, limited dexterity
* **Cognitive:** Learning disabilities, migraine, autism, seizure
* **Speech:** Unable to speak, sore throat
* **Neural:** Depression, PTSD, bipolar, anxiety

---

## Vision Issue
* Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality
* Ensure a minimum contrast ratio threshold is met for text content

---

## Hearing Issue
Make sure contents are understandable by providing text alternative for non-text content

---

## Mobility Issue
* Avoid using dynamic content that require mouse gesture only
* Make sure clickable area large (e.g Radio Button and Checkboxes)

---

## Cognitive Issue
**Use animation wisely**     
Transitions and other animation such as parallax scrolling can trigger nausea, headaches and dizziness in people with inner ear disorders.

---

# Auditing
Ask yourself these two questions 
* Can you use your UI component with the keyboard only?
* Can you use your UI component with a screen reader?

---

## Can you use your UI component with the keyboard only?       

**Using tabindex**  

tabindex=0; tabindex>0; tabindex=-1

---

## Can you use your UI component with the keyboard only? (cont.)             

**Using focus**  

The HTML autofocus attribute allows an author to specify that a particular element should automatically take focus when the page is loaded. 

---

## Can you use your UI component with a screen reader?     

* Watch your Heading Level 
* Landmark
* Using ARIA

---

# Accessibility Tooling

---

## Lighthouse
![Auditing Accessibility with Lighthouse](/assets/lighthouse-a11y-result.png)

---

## vue-axe
![Auditing Accessibility with vue-axe](/assets/vue-axe-result.png)



