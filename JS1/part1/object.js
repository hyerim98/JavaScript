var family = {
    'address': 'Seoul',
    members: {}, // 저장되는 멤버들의 객체
    addFamily: function(age, name, role) { // 멤버들을 저장하는 메서드
      this.members[role] = {
        age: age,
        name: name
      };
    },
    getHeadcount: function() {
      return Object.keys(this.members).length;
    },
    getFamilyData: function(role){
        return this.members[role].age
    }
  };
  
  family.addFamily(30, 'chloe', 'aunt');
  family.addFamily(3, 'lyn', 'niece');
  family.addFamily(10, 'dangdangi', 'dog');
  console.log(family.getFamilyData('dog'));
  console.log(family.getHeadcount());



  var printMembers = function() {
    var members = family.members;
    for (role in members) {
      console.log('role => ' + role + ', name => ' + members[role].name
       + ', age => ' + members[role].age);
    }
  };
  printMembers();
  console.log('\n');
  
  var members = family.members;
  members['nephew'] = { age: 3, name: 'hyun' }; // 멤버 추가
  members.niece = { age: 5, name: 'lyn' };  // 멤버 수정
  delete members.aunt; // 삭제
  delete members['dog']; // 삭제
  printMembers();
  console.log('\n');


  // 자바스크립트의 객체지향
  const studentProto = {
    gainExp: function() {
      this.exp++;
    }
  };
  
  const harin = {
    name: '하린',
    age: 10,
    exp: 0,
    __proto__: studentProto // 다른 객체를 할당하지 않으면 기본적으로 Object.prototype객체가 연결되어있다.
  };
  
  const bbo = {
    name: "뽀",
    age: 20,
    exp: 10,
    __proto__: studentProto // studentProto 객체를 연결했기 때문에 경험치(exp)를 얻는 행위가 가능
  };
  
  bbo.gainExp();
  harin.gainExp();
  harin.gainExp();
  
  console.log(harin);
  console.log(bbo);