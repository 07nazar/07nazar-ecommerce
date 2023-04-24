/**
 * Конвертирует строку в нижний регистр и разделяет слова знаком '-'
 * @param name - строка в произвольном виде
 */

export const normalizeStringToURL = (name: string) =>
  `${name
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/[^a-z0-9-]/g, '')}`;
