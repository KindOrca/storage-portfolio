# Storage Engineer 업무 소개 홈페이지

발표용 스토리지 업무 소개 정적 웹사이트입니다.

## 파일 구조

```text
storage-work-portfolio/
├─ index.html
├─ style.css
├─ script.js
├─ favicon.svg
└─ README.md
```

## 로컬 실행

가장 간단한 방법:
- 폴더에서 `index.html`을 더블클릭해 브라우저에서 실행

VS Code를 쓴다면 Live Server 확장으로 실행해도 됩니다.

## GitHub Pages 배포

1. GitHub에서 새 Repository 생성
2. 위 파일들을 Repository 최상위(root)에 업로드
3. `Settings` → `Pages`
4. `Build and deployment` → `Source`를 `Deploy from a branch`로 선택
5. Branch: `main`
6. Folder: `/(root)`
7. `Save`
8. 배포 완료 후 Pages 화면에 표시되는 URL로 접속

Project repository 이름이 `storage-work-portfolio`라면 일반적으로 주소는 다음 형태가 됩니다.

```text
https://YOUR-USERNAME.github.io/storage-work-portfolio/
```

## V2 핵심 변경

- Hero: 24 × 365 / 장비 입고 / 할당 작업 중심으로 변경
- Allocation Workflow: 업무팀 증설 요청 → LUN 생성·할당 → 서버팀 인식 → LVM/Filesystem → Mount
- Ledger DR: 원장 → InDR(R2 + 배치/백업/Gold Copy) / ReDR(R2 + 소산백업)
- Incident Response 섹션 제거

## 발표 모드

페이지 첫 화면의 **발표 모드** 버튼을 누르면:
- 상단 메뉴가 최소화됩니다.
- 각 섹션이 화면 단위로 보이도록 바뀝니다.
- `↑`, `↓`, `PageUp`, `PageDown`, `Space` 키로 섹션 이동이 가능합니다.

## 내용 수정 포인트

`index.html`에서 아래 문장을 검색해 본인 발표 내용에 맞게 바꾸세요.

- `데이터를 저장하는 것을 넘어`
- `제가 하는 스토리지 업무`
- `DELL POWERMAX`
- `PRIMARY SITE`
- `REMOTE DR`

회사 내부 정보는 공개하지 않는 것을 권장합니다.

업로드 금지 예:
- 실제 서버명 / Hostname
- IP 주소
- WWPN / IQN
- 스토리지 Serial / SYM ID
- 실제 SAN Zone 이름
- 내부 시스템명
- 실제 장애 로그
- 내부 DR 구성 상세
- 사내 화면 캡처
