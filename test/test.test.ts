import { describe, vi, it, expect } from 'vitest';
import Test from '../modules/routing/test';
import { mountSuspended } from 'nuxt-vitest/utils';
describe('show hello', () => {
  it('expect hello', async () => {
    const comp = await mountSuspended(Test);

    expect(comp.find('#hello').text()).toBe('bonjour');
  });
  it('expect hello', async () => {
    const comp = await mountSuspended(Test);

    expect(comp.find('#hello').text()).toBe('bonjour');
  });
  it('expect hello', async () => {
    const comp = await mountSuspended(Test);

    expect(comp.find('#hello').text()).toBe('bonjour');
  });
  it('expect hello', async () => {
    const comp = await mountSuspended(Test);

    expect(comp.find('#hello').text()).toBe('bonjour');
  });
  it('expect hello', async () => {
    const comp = await mountSuspended(Test);

    expect(comp.find('#hello').text()).toBe('bonjour');
  });
});
