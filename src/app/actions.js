'use server';

import { cookies } from 'next/headers';

export async function setCookie(key, value) {
  (await cookies()).set(key, value);
}
