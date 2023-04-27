/**
 * Конвертирует строку в нижний регистр и разделяет слова знаком '-',
 * удаляет все остальные спец. символы кроме [-, +]
 * @param name - строка в произвольном виде
 */

export const normalizeStringToURL = (name: string) =>
  `${name
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^a-z0-9-+]/g, '')}`.replace(/-{2,}/g, '-');
