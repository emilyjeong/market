/**
 * EM Dashboard — GAS URL 설정 파일
 * ─────────────────────────────────────────────────────────
 * Apps Script 재배포 시 이 파일의 URL만 업데이트하세요.
 * 두 스크립트 모두 같은 Spreadsheet에 연결되어 있습니다.
 * ─────────────────────────────────────────────────────────
 */
const CONFIG = {

  // ── MACRO SIGNAL 탭 ──────────────────────────────────────
  // 유동성(지준·TGA·RRP) / VIX / 기준금리 / M2 / 고용지표
  // 기존 Apps Script 배포 URL
  MACRO_GAS_URL: 'https://script.google.com/macros/s/AKfycbxlWyI-mLtL67AzTq9OIk6oG3-icMUJeM3cnisvxa6eQYb77G4MzYF8TbxSfirhl34-/exec',

  // ── 주가 & 시장 탭 ────────────────────────────────────────
  // GOOGLEFINANCE 기반 주가·52주 고저·스파크라인 데이터
  // market_gas.js 배포 후 URL 입력
  MARKET_GAS_URL: 'https://script.google.com/macros/s/AKfycbzi0jXa3ohp8C9FF1nmKLCOBIcEAGk8230BrPQTWAOZgguY7b_Wq-BMRyg-7Yjww8_M8A/exec',

};
