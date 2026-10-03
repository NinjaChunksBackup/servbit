export const SERVBIT_STATUS = {
  UP: 'UP',
  HASISSUES: 'HASISSUES',
  UNDERMAINTENANCE: 'UNDERMAINTENANCE',
};

export const NEON_STATUS = SERVBIT_STATUS;

const STATUS_CODE_MAP = {
  100: SERVBIT_STATUS.UP,
  200: SERVBIT_STATUS.UNDERMAINTENANCE,
  300: SERVBIT_STATUS.HASISSUES,
  400: SERVBIT_STATUS.HASISSUES,
  500: SERVBIT_STATUS.HASISSUES,
  600: SERVBIT_STATUS.HASISSUES,
};

function mapStatusCodeToStatus(statusCode) {
  return STATUS_CODE_MAP[statusCode] ?? SERVBIT_STATUS.UP;
}

export async function getServbitStatus() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_STATUS_API || process.env.NEXT_PUBLIC_NEON_STATUS_API;
    if (!apiUrl) return { status: SERVBIT_STATUS.UP, error: null };
    const response = await fetch(apiUrl, { cache: 'no-store' });
    const json = await response.json();
    const statusCode = json?.result?.status_overall?.status_code;
    const status = mapStatusCodeToStatus(statusCode);

    return { status, error: null };
  } catch (error) {
    return { status: SERVBIT_STATUS.UP, error };
  }
}

export const getNeonStatus = getServbitStatus;
