# Landing Page Specification

## Overview

This specification defines the TranscriptAI marketing landing page structure, components, and behavior.

---

## Section: Header

### Requirement: Fixed Navigation Header

The header SHALL be fixed at the top of the viewport with a backdrop blur effect.

#### Scenario: Header visibility on scroll

**Given** the user is on any part of the landing page
**When** the user scrolls down
**Then** the header SHALL remain visible at the top with `backdrop-blur-xl` effect

### Requirement: Header Navigation Links

The header SHALL contain navigation links to page sections.

#### Scenario: Navigation click behavior

**Given** the user views the header
**When** the user clicks a navigation link (Products, Pricing, About)
**Then** the page SHALL smooth-scroll to the corresponding section

### Requirement: Header Download CTA

The header SHALL contain a prominent download button.

#### Scenario: Download button appearance

**Given** the user views the header
**When** the header is rendered
**Then** a red (#FF4757) download button with Apple icon SHALL be visible

---

## Section: Hero

### Requirement: Hero Content Structure

The hero section SHALL display the app icon, headline, subheadline, and primary CTA.

#### Scenario: Hero rendering

**Given** the user loads the landing page
**When** the hero section renders
**Then** the following elements SHALL be visible:
- App icon (24x24 rounded)
- Headline with gradient text "Forever private"
- Subheadline describing offline transcription
- Download button with macOS designation
- Version badge (v0.1.5)
- Trust badges (100% Offline, Whisper AI, macOS Native)

### Requirement: Hero Download Button

The hero download button SHALL be the primary call-to-action.

#### Scenario: Download button interaction

**Given** the user views the hero section
**When** the user hovers over the download button
**Then** the button SHALL show hover effects (shadow, slight translate up)

---

## Section: App Showcase

### Requirement: Tabbed Screenshot Display

The app showcase SHALL display application screenshots in a tabbed interface.

#### Scenario: Tab switching

**Given** the user views the app showcase
**When** the user clicks a tab (Capture, Transcripts, Settings)
**Then** the corresponding screenshot SHALL be displayed

### Requirement: macOS Window Chrome

Screenshots SHALL be displayed within a macOS-style window frame.

#### Scenario: Window chrome rendering

**Given** the app showcase renders
**When** a screenshot is displayed
**Then** macOS window controls (red, yellow, green circles) SHALL appear

---

## Section: Feature Grid

### Requirement: Six Feature Cards

The feature grid SHALL display exactly 6 features in a responsive grid.

#### Scenario: Feature grid layout

**Given** the user views the feature grid on desktop
**When** the section renders
**Then** features SHALL be displayed in a 3-column grid

#### Scenario: Feature grid mobile layout

**Given** the user views the feature grid on mobile
**When** the section renders
**Then** features SHALL be displayed in a single column

### Requirement: Feature Content

Each feature card SHALL contain an icon, title, and description.

#### Scenario: Feature card structure

**Given** the feature grid renders
**When** each feature card is displayed
**Then** the card SHALL show:
- Icon with gradient background
- Feature title
- Feature description
- Hover glow effect

---

## Section: How It Works

### Requirement: Three-Step Workflow

The how-it-works section SHALL display the workflow in 3 sequential steps.

#### Scenario: Step display

**Given** the user views how-it-works
**When** the section renders
**Then** three steps SHALL be visible: Capture, Transcribe, Use

### Requirement: Step Connectors

Arrow connectors SHALL link the steps on desktop view.

#### Scenario: Arrow visibility

**Given** the user views how-it-works on desktop
**When** the section renders
**Then** arrow connectors SHALL appear between steps

---

## Section: Video Demo

### Requirement: Video Placeholder

The video demo SHALL display a playable video or placeholder.

#### Scenario: Video display

**Given** the user views the video demo section
**When** the section renders
**Then** a video container with play button SHALL be visible

---

## Section: Pricing

### Requirement: Single Pricing Card

The pricing section SHALL display one pricing option.

#### Scenario: Pricing display

**Given** the user views pricing
**When** the section renders
**Then** a pricing card SHALL show:
- "Free During Beta" badge
- $0 price (with $29 struck through)
- Feature checklist (8 items)
- Download CTA
- System requirements

---

## Section: Testimonials

### Requirement: Three Testimonials

The testimonials section SHALL display exactly 3 customer testimonials.

#### Scenario: Testimonial cards

**Given** the user views testimonials
**When** the section renders
**Then** three testimonial cards SHALL be visible with:
- Quote text
- Author avatar
- Author name and role

---

## Section: FAQ

### Requirement: Expandable FAQ Items

The FAQ section SHALL display questions in an accordion format.

#### Scenario: FAQ interaction

**Given** the user views the FAQ section
**When** the user clicks a question
**Then** the answer SHALL expand/collapse with animation

### Requirement: Default FAQ State

The first FAQ item SHALL be expanded by default.

#### Scenario: Initial FAQ state

**Given** the user loads the page
**When** the FAQ section renders
**Then** the first question SHALL be expanded

---

## Section: Final CTA

### Requirement: Final Call-to-Action

The final CTA section SHALL encourage download with prominent button.

#### Scenario: Final CTA display

**Given** the user views the final CTA
**When** the section renders
**Then** a headline, description, and download button SHALL be visible

---

## Section: Footer

### Requirement: Footer Links

The footer SHALL contain organized link columns.

#### Scenario: Footer layout

**Given** the user views the footer
**When** the section renders
**Then** the footer SHALL display:
- Logo and brand description
- Products links column
- Resources links column
- Legal links column
- Social media icons
- Copyright notice

---

## Non-Functional Requirements

### Requirement: Responsive Design

The landing page SHALL be fully responsive across device sizes.

#### Scenario: Mobile responsiveness

**Given** the user views the page on mobile (< 768px)
**When** the page renders
**Then** all sections SHALL adapt to single-column layout

### Requirement: Accessibility

The landing page SHALL meet WCAG 2.1 AA standards.

#### Scenario: Keyboard navigation

**Given** the user navigates with keyboard
**When** pressing Tab
**Then** all interactive elements SHALL be focusable in logical order

### Requirement: Performance

The landing page SHALL achieve good Core Web Vitals scores.

#### Scenario: Initial load

**Given** the user loads the page on 4G connection
**When** the page loads
**Then** LCP SHALL be under 2.5 seconds
