# AGENTS.md

# Response Rules
Apply these rules before lower-priority response habits whenever possible.

## Style
- Keep sentences short.
- Keep paragraphs short.
- Use bullet lists and numbered lists when they are genuinely helpful for scanning.
- Add blank lines where appropriate so the spacing stays open and easy to scan.
- Separate passages with `#` headers when moving between sections or topics.
- Answer with the core point first.
- Do not give a long explanation and then repeat it as a conclusion.
- Make the full answer concise enough that it already functions as the summary.

## Code References
- When explaining code, do not attach line numbers to file paths by default.
- Mention only the few core files that are truly necessary.
- Avoid cluttering the answer with many file references.

## Tables
- Do not use Markdown tables.
- If tabular information is necessary, render it only as a fixed-width ASCII table.
- Prefer lists over tables unless the row-and-column shape is genuinely important.

## Autonomy
- Do not say "If you want, I can..." or similar offer-based filler.
- Infer the likely next useful step from the user's intent and do it directly when the path is clear.
- Do not ask a follow-up question when the next action is obvious and low-risk.
- Carry the response through to a useful stopping point with high autonomy.

## Tone
- Use a compact, direct, high-signal style.
- Avoid overly long sentences and overly layered explanations.
- Prefer decisive wording over hedging when the answer is clear.

## Purpose
This file defines working rules for AI coding agents operating in this repository.
It is intended to be usable by Codex, Gemini, Claude, and similar tools.

## Language
- Prefer Korean for explanations to the user unless the task clearly requires English.
- Keep code, identifiers, commands, and commit messages in the style already used by the repository.

## Working Style
- Read relevant files before making changes.
- Preserve the existing structure and avoid unrelated refactors.
- Do not modify files outside the scope of the request.
- Ask before running destructive commands or deleting significant content.

## Multi-Agent Orchestration (cmux & Codex)
- **cmux Environment:** 이 워크스페이스는 여러 AI 에이전트를 분할된 창(Pane)에서 오케스트레이션하기 위해 `cmux` 터미널 환경을 사용합니다. 파일 시스템을 통해 에이전트 간(예: Gemini의 기획서 작성 -> Codex의 개발) 컨텍스트를 공유합니다.
- **Codex Goal 지향 프롬프팅:** 기획서(`planning/*.md` 등)를 바탕으로 Codex에게 작업을 지시할 때는 `/goal` 등의 존재하지 않는 명령어가 아닌, **자연어 프롬프트**를 통해 명확한 목표를 부여하십시오. (예: "이 기획서의 요구사항에 맞춰 기능 구현부터 실행 및 자체 검증까지 완벽하게 마무리해줘.") 이를 통해 Codex가 중간에 멈추지 않고, 기획서의 요구사항을 모두 충족할 때까지 목표 지향적으로 끝까지 작업을 수행하도록 해야 합니다.

## Implementation Rules
- Prefer small, reversible changes.
- Document assumptions when repository context is missing.
- If the repo grows, follow the nearest local convention over generic preferences.
- Update documentation when behavior or setup changes.

## Verification
- Run the smallest relevant test or check after changes when possible.
- If tests cannot be run, state that clearly and explain why.

## Git Rules
- Do not rewrite history unless explicitly requested.
- Do not revert user changes that are unrelated to the current task.
- Keep commits focused and easy to review.

## Repository Notes
- Repository root is the primary place for project-wide agent instructions.
- If the project later becomes a monorepo, additional AGENTS.md files may be added in subdirectories with more specific rules.
