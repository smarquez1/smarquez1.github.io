# Portfolio Documentation

This directory records portfolio intent and evidence. It does not duplicate executable configuration or current delivery status.

## Authority

1. User instructions override all repository documents.
2. `AGENTS.md` defines non-negotiable repository constraints.
3. The [Portfolio MVP project](https://github.com/users/smarquez1/projects/4) and its issues define current scope, status, and order.
4. Accepted, non-superseded ADRs define durable technical and workflow decisions.
5. Approved mockups define visual intent; source and configuration define current implementation behavior.

## Task Router

| Task                         | Read                                                     | Delegate           |
| ---------------------------- | -------------------------------------------------------- | ------------------ |
| Define product scope or copy | `vision.md`, `content-model.md`                          | -                  |
| Design a screen              | `design-principles.md`, relevant ADR and mockup          | `pencil-designer`  |
| Critique a mockup            | Relevant issue, mockup, handoff, and ADR                 | `mockup-reviewer`  |
| Implement approved UI        | Approved mockup, handoff, relevant ADR                   | `frontend-builder` |
| Verify a change              | `ci.md`, `development.md`, `deployment.md` as applicable | `quality-reviewer` |
| Change social metadata       | `seo/social-preview.md`                                  | `quality-reviewer` |

## Document Status

| Document                                   | Role                                                                |
| ------------------------------------------ | ------------------------------------------------------------------- |
| `vision.md`                                | Current product intent and boundaries.                              |
| `content-model.md`                         | Career-content contract and publishing guidance.                    |
| `design-principles.md`                     | Current design evaluation criteria.                                 |
| `mockups/`                                 | Approved design evidence and handoffs.                              |
| `decisions/`                               | Accepted historical decisions; do not use for live delivery status. |
| `roadmap.md`                               | Initial MVP scope only; the GitHub Project is current.              |
| `development.md`, `ci.md`, `deployment.md` | Operator guidance; scripts and workflows are executable truth.      |
