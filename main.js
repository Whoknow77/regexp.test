const str = `
010-1234-5678
gnsdh8616@naver.com
https://www.naver.com
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
    str.match(/(?<=@).{1,}/g)
)


