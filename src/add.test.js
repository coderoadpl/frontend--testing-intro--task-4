import add from './add'

test('dumb test', () => {
    expect(true).toBe(true)
})

test('add 1 + 2 equals to 3', () => {
    const expectation = expect(add(1, 2))
    expectation.toBe(3)
})

test('add -2 + 2 equals to 0', () => {
    expect(add(-2, 2)).toBe(0)
})