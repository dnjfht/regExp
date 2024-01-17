# 정규표현식(RegExp)

정규식, Regular Expression

## 역할

- 문자 검색(search)
- 문자 대체(replace)
- 문자 추출(extract)

## 테스트 사이트

https://regexr.com/

## 정규식 생성

```js
// 생성자
new RegExp("표현", "옵션");
new RegExp("[a-z]", "gi");

// 리터럴
/표현/옵션
/[a-z]/gi
```

## 예제 문자

```js
const str = `
010-1234-5678
thednjfht@gmail.com
https://www.omdbapi.com/?apikey=56d328e5&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
`;
```

## 메소드

| 메소드  | 문법                               | 설명                               |
| ------- | ---------------------------------- | ---------------------------------- |
| test    | `정규식.test(문자열)`              | 일치 여부(Boolean) 반환            |
| match   | `문자열.match(정규식)`             | 일치하는 문자의 배열(Array) 반환   |
| replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 새로운 문자로 대체 |

## 플래그(옵션)

| 플래그 | 설명                                        |
| ------ | ------------------------------------------- |
| g      | 모든 문자 일치(global)                      |
| i      | 영어 대소문자를 구분 않고 일치(ignore case) |
| m      | 여러 줄 일치(multi line)                    |

## 패턴(표현)

| 패턴       | 설명                               |
| ---------- | ---------------------------------- |
| ^ab        | 줄(Line) 시작에 있는 ab와 일치     |
| ab$        | 줄(Line) 끝에 있는 ab와 일치       |
| .          | 임의의 한 문자와 일치              |
| a&verbar;b | a 또는 b와 일치                    |
| ab ?       | b가 없거나 b와 일치                |
| {3}        | 3개 연속 일치                      |
| {3,}       | 3개 이상 연속 일치                 |
| {3.5}      | 3개 이상 5개 이하(3~5개) 연속 일치 |
