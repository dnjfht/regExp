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

console.log(str.match(/\./gi));
// ['.', '.', '.', '.']

// 정규표현식에서 마침표 기호 하나는 특정한 문자를 검색하는 일종의 패턴.
// 이 문장에서 마침표를 찾고 싶다고 .을 찍었는데 하나의 명령으로 동작하게 됨.
// 그렇기 때문에 이 .이 명령으로 동작하지 않고 일반적인 문자로 해석되라고 특정된 기호 앞에 백슬래시(\) 기호를 붙여줄 수 있음.

// 이스케이프 문자(Escape Character) : \(백슬래시) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자.

console.log(str.match(/\.$/gi));
// null

// . 뒤에 $를 하나 붙여주면, 이 $ 앞에 있는 하나의 단어로 그 해당하는 줄이 끝나는 부분을 찾아서 끝나는 부분을 일치시킨다는 뜻.
// 하지만 이렇게 하면, 맨 마지막 줄의 끝나는 부분만 놓고 판단을 하기 때문에 ` 기호 앞에는 .이 없어 null이 값으로 나오게 됨.

console.log(str.match(/\.$/gim));
// ['.']

// 그 대신 여러 줄을 놓고 판단할 수 있도록 플래스 m을 추가해주면, 5번째 줄 끝에 있는 .을 배열로 반환하게 됨.
