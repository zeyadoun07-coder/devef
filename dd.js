// ********* بيانات الأسئلة حسب الصف *********
let questionsByGrade = {
   first: [
  {q:"اعطي المعلم التلميذ كتاب .ما المفعولان؟", o:["المعلم-التلميذ","التلميذ-كتابا","اعطى-التلميذ","كتابا-المعلم"], a:"التلميذ-كتابا"},
  {q:"منح الله المؤمن أجرا الفعل منح ينصب:", o:["مفعول واحد","مفعولين","مبتداوخبر","حالاوتمييزا"], a:"مفعولين"},
  {q:"كسا الأب الفقير ثوبا المفعول به الاول هو:", o:["الاب","ثوبا","الفقير","كسا"], a:"الفقير"},
  {q:"البس الطبيب المريض ثوبا المفعول به الثاني هو:", o:["الطبيب","المريض","ألبس","ثوبا"], a:"ثوبا"},
  {q:"اي جمله فيها فعل ينصب مفعولين؟", o:["كتبَ التلميذُالدرسَ","لعبَ الطفلُ بالكرة","اعطى المدير الطالب جائزة","جلس الرجل على الكرسي"], a:"اعطى المدير الطالب جائزة"},
  {q:"سأل التلميذ المعلم سؤالا كم مفعول به في الجمله؟", o:["واحد","اثنان","ثلاثه","لايوجد"], a:"اثنان"},
  {q:"نبأ المعلم التلميذ الناجح اعرب كلمه الناجح", o:["مفعول به اول","مفعول به ثان","حال","تمييز"], a:"اثنان"},
  {q:"أي فعل من الآتي ليس من الافعال التي تنصبمفعولين؟", o:["أعطى","كسا","كتب","منح"], a:"كتب"},
 {q:"أخبر الأب أبناءه الخبرز المفعول به الأول هو:", o:["الأب","أبناءه","الخبر","أخبر"], a:"أبناءه"},
 {q:"أي جمله مما يأتي اختل فيها ترتيب المفعولين دون ان يتغير المعنى ؟", o:["منح الله المؤمن الثواب","اعطى المعلم الكتاب التلميذ","ألبس الأب الطفل معطفا","كساالغني الفقير ثوبا "], a:"اعطى المعلم الكتاب التلميذ"},
{q: "في جملة: أعطى الأبُ ابنه هديةً — ما المفعول به الأول؟",o: ["الأب", "ابنه", "هديةً", "أعطى"],a: "ابنه"},
{ q: "أي فعل من الأفعال الآتية ينصب مفعولين؟",  o: ["جلس", "ذهب", "منح", "نام"],a: "منح"},
{ q: "في جملة: كسا الشتاءُ الأرضَ ثوبًا أبيضَ — إعراب كلمة (أبيضَ)؟", o: ["مفعول به أول", "مفعول به ثانٍ", "حال", "نعت"], a: "نعت"},
{ q: "أي جملة تحتوي على فعل ينصب مفعولين؟", o: [   "لعبَ الطفلُ في الحديقة",   "كتبَ التلميذُ الدرسَ",   "ألبستِ الأمُّ الطفلَ معطفًا",   "نامَ الرجلُ مبكرًا" ], a: "ألبستِ الأمُّ الطفلَ معطفًا"},
{ q: "أي جملة اختل فيها ترتيب المفعولين دون أن يتغير المعنى؟", o: [   "منحَ اللهُ المؤمنَ الثوابَ",   "أعطى المعلمُ الكتابَ التلميذَ",   "ألبسَ الأبُ الطفلَ معطفًا",   "كسا الغنيُّ الفقيرَ ثوبًا" ], a: "أعطى المعلمُ الكتابَ التلميذَ"}
  ],
   stsec1: [
   {q:"بين نوع الكناية في: طويل النجاد رفيع العماد، كثير الرماد إذا ما شتا", o:["صفة","موصوف","نسبة"], a:"صفة"},
{q:"بين نوع الكناية في: وجدت فيك بنت عدنان دارا، ذكرتها بداوة الأعراب", o:["صفة","موصوف","نسبة"], a:"موصوف"},
{q:"بين نوع الكناية في: الضاربين بكل أبيض صارم، والطاعنين مجامع الأضغان", o:["صفة","موصوف","نسبة"], a:"موصوف"},
{q:"بين نوع الكناية في: المجد بين ثوبيك، والكرم ملء برديك", o:["صفة","موصوف","نسبة"], a:"نسبة"},
{q:"بين نوع الكناية في: تقول العرب: فلانة بعيدة مهوى القرط", o:["صفة","موصوف","نسبة"], a:"صفة"},
{q:"بين نوع الكناية في: فمساهم وبسطهم حرير، وصبحهم وبسطهم تراب", o:["صفة","موصوف","نسبة"], a:"صفة"},
{q:"بين نوع الكناية في: ومن في كفه منهم قناة، كمن في كفه منهم خضاب", o:["صفة","موصوف","نسبة"], a:"موصوف"},
{q:"بين نوع الكناية في: إن في ثوبك الذي المجد فيه، لضياء يزرى بكل ضياء", o:["صفة","موصوف","نسبة"], a:"نسبة"},
{q:"بين نوع الكناية في قوله تعالى: (فأصبح يقلب كفيه على ما أنفق فيها وهي خاوية)", o:["صفة","موصوف","نسبة"], a:"صفة"},
{q:"بين نوع الكناية في: قوم ترى أرماحهم يوم الوغى، مشغوفة بمواطن الكتمان", o:["صفة","موصوف","نسبة"], a:"موصوف"},
{q:"بين نوع الكناية في قوله تعالى: (أومن ينشأ في الحلية وهو في الخصام غير مبين)", o:["صفة","موصوف","نسبة"], a:"موصوف"},
{q:"بين نوع الكناية في: فلما شربناها ودب دبيبها، إلى موضع الأسرار قلت لها قفي", o:["صفة","موصوف","نسبة"], a:"موصوف"},
   ],  
    prep3: [
    
   {
    "q": "أي الكلمات التالية تعد صيغة مبالغة؟",
    "o": ["كاتب", "مكتوب", "كتّاب", "مكتب"],
    "a": "كتّاب"
  },
  {
    "q": "صيغة المبالغة من الفعل \"شكر\" هي:",
    "o": ["شاكر", "مشكور", "شكور", "شكرًا"],
    "a": "شكور"
  },
  {
    "q": "ما وزن صيغة المبالغة في كلمة \"مِعطاء\"؟",
    "o": ["فعّال", "مفعال", "فعول", "فعيل"],
    "a": "مفعال"
  },
  
  {
    "q": "\"الله سميع الدعاء.\" ما الفعل الذي اشتقت منه صيغة المبالغة في الجملة؟",
    "o": ["سمع", "استمع", "أسمع", "تسمع"],
    "a": "سمع"
  },
  {
    "q": "أي الجمل التالية تحتوي على صيغة مبالغة على وزن \"فَعِل\"؟",
    "o": ["المؤمن صبور على البلاء.", "العالم عليم بأمور دينه.", "الجندي مقدام في المعركة.", "كن حَذِرًا من الأعداء."],
    "a": "كن حَذِرًا من الأعداء."
  },
  {
    "q": "\"إن الله غفار الذنوب.\" ما وزن صيغة المبالغة في هذه الجملة؟",
    "o": ["فعيل", "فعول", "فعّال", "مفعال"],
    "a": "فعّال"
  },
  {
    "q": "صيغة المبالغة من الفعل \"حذر\" هي:",
    "o": ["محذور", "حَذِر", "حاذر", "حذران"],
    "a": "حَذِر"
  },
  {
    "q": "\"الرجل قوّال الحق.\" ما نوع المشتق في كلمة \"قوّال\"؟",
    "o": ["اسم فاعل", "اسم مفعول", "صيغة مبالغة", "صفة مشبهة"],
    "a": "صيغة مبالغة"
  },
  {
    "q": "أي من صيغ المبالغة التالية تدل على كثرة الإقدام؟",
    "o": ["مقدام", "قديم", "مقدم", "قادم"],
    "a": "مقدام"
  },
  {
    "q": "صيغة المبالغة \"نذير\" مشتقة من الفعل:",
    "o": ["نذر", "أنذر", "تناذر", "استنذر"],
    "a": "أنذر"
  },
  {
    "q": "\"المؤمن مِعطاء للفقراء.\" الفعل من \"مِعطاء\" هو:",
    "o": ["عطى", "أعطى", "تعاطى", "استعطى"],
    "a": "أعطى"
  },
  
  {
    "q": "صيغة المبالغة من الفعل \"بشر\" هي:",
    "o": ["مباشر", "بشير", "مبشر", "استبشار"],
    "a": "بشير"
  } 
  ],
  rdsec3: [
{q:"اسلوب الاستثناء من بين الاساليب التالية هو ", o:["كن كريماً غير بخيل","عدا المتسابق بكل قوته","احب ممارسه الرياضه عدا المسارعة","اجتهد والا تندم"], a:"احب ممارسه الرياضه عدا المسارعة"},
 {q:" .ما اشتعل من الاعواد الا عود نوع جمله الاستثناء", o:["تام مثبت","تام منفي","ناقص منفي","ناقص مثبت"], a:"ناقص منفي"}
  ]
  
};

// ********* متغيرات عالمية *********
let qz = [];
let ans = [];
let i = 0;
let t;

// ********* بدء الاختبار *********
function S(){
  let name = document.getElementById("studentName").value.trim();
  if(name === ""){
    alert("من فضلك اكتب اسمك");
    return;
  }

  if(localStorage.getItem("done_" + name) === "finished"){
    alert("لقد أكملت الاختبار بالفعل، لا يمكن إعادة الحل.");
    return;
  }

  localStorage.setItem("done_" + name, "started");

  let grade = document.getElementById("studentGrade").value;
  qz = questionsByGrade[grade];

  document.getElementById("n").innerText = name;
  document.getElementById("g").innerText = grade;

  document.getElementById("startPage").classList.remove("active");
  document.getElementById("quizPage").classList.add("active");

  i = 0;
  showQuestion();
  updateQuestionProgress();
  startTimer();
}

// ********* عرض السؤال *********
function showQuestion() {
  let q = qz[i];
  document.getElementById("q").innerText = q.q;
  document.getElementById("qc").innerText = "السؤال " + (i+1) + " من " + qz.length;

  // عرض الاختيارات
  for (let j = 0; j < 4; j++) {
    let el = document.getElementById("o" + (j+1));
    el.innerText = q.o[j];
    el.classList.remove("selected");
    if(ans[i] === q.o[j]) el.classList.add("selected");
  }

  // ********* التحكم في أزرار التالي والإنهاء *********
  let nextBtn = document.querySelector('button[onclick="nxt()"]');
  let endBtn = document.querySelector('button[onclick="end()"]');

  if(i === qz.length - 1){ // آخر سؤال
    nextBtn.style.display = "none";
    endBtn.style.display = "inline-block";
  } else {
    nextBtn.style.display = "inline-block";
    endBtn.style.display = "none";
  }
}


// ********* اختيار الإجابة *********
function sel(idx) {
  if(idx >= 0 && idx < 4){
    ans[i] = qz[i].o[idx];
    for(let j = 1; j <= 4; j++)
      document.getElementById("o"+j).classList.remove("selected");

    document.getElementById("o"+(idx+1)).classList.add("selected");
  }
}

// ********* السؤال التالي *********
function nxt(){
  if(i < qz.length - 1){
    i++;
    showQuestion();
    updateQuestionProgress();
  }
}

// ********* السؤال السابق *********
function prv(){
  if(i > 0){
    i--;
    showQuestion();
    updateQuestionProgress();
  }
}

// ********* تحديث شريط تقدم الأسئلة *********
function updateQuestionProgress(){
  let pb = document.getElementById('pb');
  pb.style.width = ((i+1)/qz.length * 100) + "%";
}

// ********* مؤقت الوقت *********
function startTimer(){
  let grade = document.getElementById("studentGrade").value;
  let timeByGrade = {
    "first": 10*60,
    "prep3": 15*60,
    "stsec1": 20*60,
    "rdsec3": 20*60
  };

  let time = timeByGrade[grade];
  let totalTime = time;
  let tpb = document.getElementById('tpb');

  t = setInterval(function(){
    let minutes = Math.floor(time/60);
    let seconds = time%60;
    if(seconds < 10) seconds = "0"+seconds;

    document.getElementById("t").innerText = minutes + ":" + seconds;

    // تحديث شريط الوقت
    tpb.style.width = ((totalTime - time)/totalTime * 100) + "%";

    if(time <= 0){
      clearInterval(t);
      end();
    } else {
      time--;
    }
  }, 1000);
}

// ********* إنهاء الاختبار *********
function end(){
  clearInterval(t);

  document.getElementById("quizPage").classList.remove("active");
  document.getElementById("resultPage").classList.add("active");

  let s = 0, r = "<ul>";

  for(let x=0; x<qz.length; x++){
    let ua = ans[x] || "لم تجب";
    let ca = qz[x].a;
    let ok = (ua === ca);

    if(ok) s++;

    r += `<li>${ok?"☑":"✖"} س${x+1}: ${ua} <span style="color:blue">الاجابة الصحيحة</span> / ${ca}</li>`;
  }

  r += "</ul>";

  document.getElementById("fs").innerText = s;
  document.getElementById("tq").innerText = qz.length;
  document.getElementById("dr").innerHTML = r;

  let name = document.getElementById("n").innerText;
  let grade = document.getElementById("g").innerText;
  let score = s;

  localStorage.setItem("done_" + name, "finished");

  sendToGoogleForm(name, grade, score);
}

// ********* إرسال النتيجة للـGoogle Form *********
function sendToGoogleForm(name, grade, score){
  let formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdZYAOUIZDxylTQygJNRL-YoLQpq0360IY0cQ8F2Gx_Tag9xw/formResponse";
  let data = new FormData();
  data.append("entry.1700652289", name);
  data.append("entry.982489865", grade);
  data.append("entry.619258351", score);

  fetch(formURL, { method:"POST", mode:"no-cors", body:data });

  alert("تم إرسال درجتك بنجاح");
}
