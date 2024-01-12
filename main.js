const str = `
010-1234-5678
thednjfht@gmail.com
http://www.omdbapi.com/?apikey=56d328e5&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

const regexp = new RegExp("the", "");
// new RegExp = /the/
console.log(str.match(regexp));
// match() 메서드는 문자열이 정규식과 매치되는 부분을 검색.

// ['the', index: 112, input: '\n010-1234-5678\nthednjfht@gmail.com\nhttp://www.omdbapi…ck brown fox jumps over the lazy dog.\nabbcccdddd\n', groups: undefined]
// 0 : "the", groups :  undefined, index : 112, input : "\n010-1234-5678\ndnjfht@gmail.com\nhttp://www.omdbapi.com/?apikey=56d328e5&s=frozen\nThe quick brown fox jumps over the lazy dog.\nabbcccdddd\n", length : 1
// the라는 단어를 찾아서 배열 데이터로 만들어줌.

// 만약 str 안에서 the라는 모든 단어를 찾아서 배열 데이터로 만들고 싶다면
// 정규 표현식을 생성하는 생성자 함수의 두 번째 인수로 g라는 옵션을 추가해주면 됨.

const regexp2 = new RegExp("the", "g");
// new RegExp2 = /the/g
console.log(str.match(regexp2));
// ['the', 'the']

// 그런데 여기서 대문자 T로 시작하는 The는 포함되지 않았음.
// The는 이 패턴에 일치하지 않았기 때문에 검색되지 않은 것.
// 만약 대문자, 소문자 가리지 않고 해당하는 패턴으로 검색을 하고 싶다고 하면 옵션 부분에 i 옵션을 추가해주면 됨.

const regexp3 = new RegExp("the", "gi");
// new RegExp3 = /the/gi
console.log(str.match(regexp3));
// ['the', 'The', 'the']

// 결론, 기본적으로 우리가 원하는 패턴을 적어주고 그 패턴으로 검색을 어떻게 할 것인지에 대한 기본적인 옵션을 추가해주면 됨.

const regexp4 = /fox/gi;
console.log(regexp4.test(str));
// true

const regexp5 = /Seungmin/gi;
console.log(regexp5.test(str));
// false

console.log(str.replace(regexp4, "AAA"));
// 010-1234-5678
// thednjfht@gmail.com
// http://www.omdbapi.com/?apikey=56d328e5&s=frozen
// The quick brown AAA jumps over the lazy dog.
// abbcccdddd
