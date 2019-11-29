import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.scss']
})
export class GrammarComponent implements OnInit {
  grammars = [
    { "key": "~ばかりか~さえ", value: "non solo, ma anche" },
    { "key": "どころか", value: "non solo non so scrivere i kanji, ma non so neanche scrivere in hiragana" },
    { "key": "どうも", value: "esprime incertezza, da mettere prima dell'espressione incerta (鈴木さんはどうも京都大学に入りたいらしい。あの先生の授業はどうも面白くない)" },
    { "key": "いかにも", value: "indeed" },
    { "key": "かならずしも", value: "non è che, non necessariamente... (頭の良い人が必ずしも性交するとは限らない/わけではない/とは言えない/とは思わない)" },
    { "key": "かねる", value: "vmasu+かねる: è impossibile vmasu-are" },
    { "key": "かねない", value: "vmasu+かねない: non è impossibile (è ben probabile) che..." },
    { "key": "からと言って", value: "子供だからと言って許すわけにはいかない" },
    { "key": "かと言うと", value: "日本人はみんあすきが好きかと言うと、そうではない。(uso quando non sono d'accordo con una credenza comue)" },
    { "key": "ことによる", value: "XはYことによる (è perchè Y era vera che anche X è vera)" },
    { "key": "よもや", value: "uguale a まさか (ma non lo puoi usare in esclamazioni)" },
    { "key": "なにしろ", value: "as a matter of fact... da usare per cose estreme per cui chi ne parla ha una reazione emotiva" },
    { "key": "~なり~なり", value: "... or ..., si può usare con nomi o con verbi (私なり鈴木先生なり。辞書を引くなり、日本人に聞くなり)" },
    { "key": "にほかならない", value: "nient'altro che..." },
    { "key": "にもかかわらず", value: "nonostante... 危険なのにもかかわらず。危険であるにもかかわらず" },
    { "key": "において", value: "presso (sia spazio che tempo). avverbio. vedi における" },
    { "key": "における", value: "presso (sia spazio che tempo). modifica il nome che lo segue. vedi において" },
    { "key": "につき", value: "per ogni. この仕事は一時間につき六ドルもらえる" },
    { "key": "につれて", value: "Aにつれて、B. The more A is true, B becomes also true" },
    { "key": "のうえでは", value: "as far as X is concerned" },
    { "key": "をはじめとして", value: "Aをはじめとして,B blah blah blah (in questo gruppo, a partire da A, anche B blah blah blah)" },
    { "key": "来", value: "らい, sin da... トムは二十年来日本語の勉強を続けている。今年の冬は五十年来の寒さだ" },
    { "key": "ろくに~ない", value: "ろくに寝られなかった, i couldn't sleep properly" },
    { "key": "しかも", value: "and on top of that, ..." },
    { "key": "そうかといって", value: "detto questo, però..." },
    { "key": "そこで", value: "1. pertanto... da usare _sempre_ all'inizio di una frase. 2. XそこでY (quando X succede, fai Y. Y è una richiesta, un comando, un invito)" },
    { "key": "そこを", value: "トムはフットボールの選手としては小さいが、そこを脚力で補っている (soko wo indica una cosa negativa per contrastare la quale si fa dell'effort)" },
    { "key": "その上", value: "additional emphatic statement" },
    { "key": "上に", value: "additional emphatic statement" },
    { "key": "それどころか", value: "da usare all'inizio di frasi. non so scrivere i kanji. e non solo, non so neanche scrivere in hiragana" },
    { "key": "それも", value: "..., and what's worse, ... 英語で、それも早口で話されたので全然わからなかった" },
    { "key": "それにvsそれと", value: "sore ni is used when the two things are closely connected while sore to is used when this connection is weak." },
    { "key": "各々", value: "おのおの = それぞれ (ma おのおの puo' riferirsi solo ad umani)" },
    { "key": "銘々", value: "めいめい = それぞれ (ma めいめい puo' riferirsi solo ad umani)" },
    { "key": "たところで", value: "even if. no matter how. どんなに低くも積もったところで、工費は五億円を超えるだろう" },
    { "key": "という風に", value: "彼はどうしようもないという風に首を振った" },
    { "key": "というのに", value: "nonostante" },
    { "key": "というよりは", value: "piuttosto che, 今年の夏は涼しいというよりは寒かった" },
    { "key": "ところが", value: "however, something unexpected. SEMPRE all'inizio di una frase." },
    { "key": "とも", value: "simile a ても. no matter, even if 出ようとも。忙しくとも。健康であろうとも。遅くとも (questa è una frase fatta, vuol dire 'al più tardi')" },
    { "key": "となるとvsとすると", value: "S to suruo to is used when S is hypothetical or uncertain, whereas S to naru to is used when the speaker takes S to be true or a reality" },
    { "key": "とする", value: "assumiamo che..." },
    { "key": "途端に", value: "nell'istante in cui..." },
    { "key": "とうとう", value: "finalmente (una cosa negativa)" },
    { "key": "つつ", value: "-ing, while, although" },
    { "key": "は言うまでもなく", value: "non solo (cosa ovvia), ma" },
    { "key": "よう", value: "uguale a だろう, 読めよう=読めるだろう. the writer's conjecture that something can be done, si mette davanti allo stem di Vpot" },
    { "key": "あえて", value: "daringly, boldly, contrary to common sense" },
    { "key": "あげく(に)", value: "in the end, finally さんざん考えたあげくに大学院へ進学することにした。" },
    { "key": "あくまでも  ", value: "to the utmost degree, to the end" },
    { "key": "あながち~ない", value: "non necessariamente 彼の推理もあながち間違っていないのかもしれない (his guess may not necessarily be wrong)" },
    { "key": "あるいは", value: "or" },
    { "key": "あたかも", value: "= まるで、ma più bookish" },
    { "key": "ばかりに", value: "solo perchè, 僕が一言変なこと言ったばかりに彼女との関係は悪くなってしまった. se c'è un たい, indica effort (あいつは目立ちたいばかりに似合わない派手な服を着ている)" },
    { "key": "べからず", value: "negativo di べし, strong prohibition" },
    { "key": "べく", value: "in order to" },
    { "key": "べくして", value: "exactly as expected, 起こるべくして起こった. solo verbi intransitivi" },
    { "key": "だけあって", value: "and as one would expect, 彼女は人気女優だけあってすごいうちに住んでいる. opppure, for good reason. 吉岡さんが進めるだけあって個々の料理は美味しい (oshioka recommends this place for good reason, the food is delicious)" },
    { "key": "だけに", value: "molto simile a だけあって. ビルは元フットボール選手だけに足が速い" },
    { "key": "だけあって vs だけに", value: "だけに vuol dire solo 'as one would expect' e non 'for good reason'. だけあって solo per cose desiderabili, だけに sia per cose desiderabili che indesiderabili" },
    { "key": "だけのことはある/だけのことはあって", value: "non per niente, no wonder. 明子は韓国語がとても上手だ。さすがに二年間ソウル大学に留学していただけのことはある" },
    { "key": "だに", value: "1. solo. 思い出すだに恥ずかしい (solo a pensarci mi imbarazzo) 2. even 想像だにしなかった (non potevo nemmeno immaginarlo)" },
    { "key": "だの", value: "lista non esaustiva, come とか" },
    { "key": "であれ", value: "= でも, ma più formale" },
    { "key": "あるまいし", value: "= ない" },
    { "key": "どちらかというと/どちらかと言えば", value: "rather. dovendo dire una cosa o l'altra... 彼はどちらかと言うと教育者というよりは研究者だ" },
    { "key": "どうか", value: "please (strong plea, more than a simple request). da mettere all'inizio della frase" },
    { "key": "ども", value: "= ても. even though, no matter how much. antiquato, si usa in proverbi" },
    { "key": "どうにも~ない", value: "no matter how much....not" },
    { "key": "が早いか", value: "as soon as" },
    { "key": "ごとし", value: "like. 人生は旅のごとし.その無謀（むぼう）な好意は火中に飛び込むかのごとし(acting recklessly like that is like jumping into the fire).彼女はモナリザのごとくいつも微笑んでいる。X氏は超人のごとき人だ。" },
    { "key": "反面", value: "while, on the other hand 携帯電話は便利な反面、わずらわしいことともある(benri, but sometimes annoying). blahblahblahが、その反面..." },
    { "key": "反面 vs にたいして", value: "ni taishite: confronto di due cose. hanmen: confronto di due lati di una cosa sola." },
    { "key": "はたして", value: "indeed. in frasi che esprimono un dubbio, è un rafforzativo del fatto che dubito. 今年の冬も暖冬（だんとう）だと言われていたが、はたして暖冬だった。はたして日本の教育は改革されるだろうか(i wonder if japanese education will ever be reformed).はたして女性の地位が改善されるとしても時間がかかるだろう(even if women's status improves, as expected, it may take time)" },
    { "key": "ひいては", value: "non solo x, ma anche Y 彼は同僚にライバル意識、ひいては殺意すら抱いていた。" },
    { "key": "一...として。。ない", value: "neanche un.... (one + counter) うちの課には一人として英語を話せる者がいない(not a single person in my section can speak english)" },
    { "key": "一つ", value: "si più usare come avverbio all'inizio frase. 一つ相談にのってください" },
    { "key": "一つには", value: "for one thing. si usa per dare una ragione o per dare un esempio (implicando che ce ne sono altri) " },
    { "key": "いかん", value: "derivato da いかに(how, in what way). alla fina di una frase, いかんだ=次第だ(anche grammar-wise). per connettere due frasi, いかんによって(depending on A, B)" },
    { "key": "いかなる", value: "= どんな (formale)" },
    { "key": "いかに", value: "how" },
    { "key": "いまさら", value: "ormai" },
    { "key": "一方だ", value: "something that happens continuously (一方で per connettere due frasi)" },
    { "key": "一方で", value: "on one hand... (a conjunction to present two concurrent things or contrastive situations)" },
    { "key": "以来    ", value: "irai si può usare per situazioni continuative dopo l'evento iniziale (es. 'l'ho incontrato tre volte dalla graduation' NON si puà dire con irai)" },
    { "key": "一旦（いったん）", value: "per un pò (tempo relativamente breve). この小説はいったん読みはじめたらやめられない." },
    { "key": "言ってみれば", value: "si potrebbe dire.... anticipa comparazioni o metafore. quasi sinonimi: いわば(so to speak), 例えていえば(per esempio)" },
    { "key": "言うまでもない", value: "it goes without saying" },
    { "key": "言わば", value: "as it were, so to speak" },
    { "key": "いわゆる", value: "cosiddetto" },
    { "key": "限りだ", value: "extremely (con emozione). 羨ましい限りだ (sono molto invidioso di te)" },
    { "key": "かい/がい", value: "valore (es. 生き甲斐. 勉強したかい) gai quando attaccato a Vmasu, kai altrimenti" },
    { "key": "か否か", value: "かいなか=かどうか" },
    { "key": "かな", value: "usato non alla fine di una frase diventa come ことに (ma il suo uso è limitato a pochi aggettivi relativi a emozioni fortemente sentite. es 悲しいかな sadly、惜しいかな regrettably)" },
    { "key": "から言って", value: "in terms of, judging from. non è il 'kara' di dakara, ma quello di 'mukashi kara'" },
    { "key": "からなる", value: "consist of, be composed of" },
    { "key": "からには", value: "al passato: ora che... al presente: finchè いったん引き受けたからにはあ最後まで責任をもってやります (now that i accepted the job, i will complete it) 裁判と言うからには弁護人が不可欠(ora che siamo in giudizio, ora che è un trial, serve un avvocato)" },
    { "key": "からして", value: "1. a partire da (un dettaglio, e le conseguenze si sentono per il tutto)... 社長からして会社再建の意欲がないんだから、il morale di tutti gli impiegati è basso. 2. considerando che.. あの日本語の話し方からして彼は日本に行ったことがあるに違いない" },
    { "key": "かと思うと", value: "appena penso x, y (anche figurato) these days, just when you think it's gotten chilly, the next day it turns warm again" },
    { "key": "かつ", value: "and (connette due frasi, si usa dopo la virgola). documenti formali" },
    { "key": "きらいがある", value: "ha la tendenza a... (cose negative) 彼は物事を単純に考えるきらいがある。彼は独断こきらいがある (ha la tendenza ad essere dogmatico)" },
    { "key": "きり、っきり", value: "TODO, un sacco di significati" },
    { "key": "ことか", value: "sentence final exclamatory phrase used in written language (non sarcastico)" },
    { "key": "ことに", value: "emotion or subjective judgement 残念なことに、嬉しいことに. simile a かな" },
    { "key": "加えて", value: "and in addition... what's more... 雪、雨、加えて強風の被害が大きかった。それに加えてblah blah blah" },
    { "key": "までだ/までのことだ (sono uguali)", value: "1. cope with a negative situation もしTOEFLの点が悪かったらもう一度受けるまでだ 2. straigthforward reason for an action 日本語は面白そうだったので、捕ったまでのことだ (i took japanese language only because it looked interesting). the decision maker can only be the first person" },
    { "key": "まして/ましてや (sono uguali)", value: "un po' come どころか, to say nothing of, let alone" },
    { "key": "いわんや", value: "un po' come どころか, to say nothing of, let alone" },
    { "key": "めったに", value: "molto raramente" },
    { "key": "見るからに", value: "visibilmente, ovviamente" },
    { "key": "ものか", value: "1. as if! 2. indica un desiderio もう少し広い家に住めないものか i wonder if i could live in a bigger house..." },
    { "key": "ものなら", value: "esattamente come nara, ma per cose ipotetiche molto unlikely o comunque counterfactual" },
    { "key": "ものの", value: "although. 通訳の仕事を引き受けたものの、上手くやれる自信がない (ho accettato il lavoro da traduttore, ma non sono confidente di riuscire a farlo bene). formale" },
    { "key": "ものを", value: "although. con una subordinata counterfactual. 彼は日本語を続けて勉強すればいいものを、一年間やっただけでやめてしまった (although he should have continued studying japanese, he quit after only one year). すぐ医者に診てもらったら簡単に治っていたものを、手遅れになってしまった" },
    { "key": "もさることながら", value: "x gasa, ma y gasa ancora di più この図書館は蔵書（ぞうしょ）の多さもさることながらサービスが実にすばらしい" },
    { "key": "もっとも", value: "usato all'inizio di una frase. vuol dire 'ma', 'però', crea contrasto con la frase precedente. è un pò come しかし" },
    { "key": "むしろ", value: "piuttosto" },
    { "key": "ないことには", value: "if not, then... この仕事が終わらないことには、家族と旅行に行くこともできない" },
    { "key": "ないまでも", value: "この公演は大成功とは言えないまでも、それなりの成果ももたらした (questa performance non è stata un super successo, ma ha dato dei risultati). si usa quando una cosa non è perfetta, ma neanche così male" },
    { "key": "ないし", value: "AないしB from A to B, A or B" },
    { "key": "中を", value: "when, in the midst of, da usare come avverbio 冷たい風が吹く中を10キロも歩いた" },
    { "key": "なくして", value: "= なくて, なしに。努力なくしてはこの事業は出来ない" },
    { "key": "なまじ/なまじっか", value: "poco, in modo imperfetto, なまじっか英語できる (parlo un poco di inglese)なまじの学問 (un pò di educazione). si usa quando quel poco di una cosa buona mi causa problemi (perchè non è sufficiente o per esempio perchè tutti in ufficio mi chiedono aiuto solo perchè so un pochino di inglese)" },
    { "key": "並み", value: "al livello di. プロ並み, da pro. 専門家並みの知識" },
    { "key": "何らかの", value: "some. 何らかの原因で走行中の電車が急停車した" },
    { "key": "何ら~ない", value: "at all. 日本の大学教育の現状は何ら改善されていない (jap. education hasn't been improved at all). " },
    { "key": "なお", value: "even more" },
    { "key": "なおさら", value: "= いっそう even more " },
    { "key": "なおさら vs なお", value: "NON HO CAPITO BENE 「なおさら」というのは「今までに増して（まして）」という意味です。「なお」のように「付け加える」という意味ではありません。" },
    { "key": "ならでは", value: "(axp,adj-no) distinctive of/characteristic of/uniquely applying to. 一流の科学者ならではの説明 (una spiegazione che solo uno scienziato potrebbe fare). 女性ならではできない仕事 (un lavoro che non puoi fare se non sei una donna) " },
    { "key": "なり", value: "as soon as. 妻は私の顔を見るなり泣き出した (mia moglie si è messa a piangere appena mi ha visto). per azioni spontanee o incontrollabili." },
    { "key": "なす", value: "= する, più o meno" },
    { "key": "なぜなら", value: "because" },
    { "key": "んばかりに", value: "come se stesse per... 犬は噛みつかんばかりに僕に向かってほえた(il cane mi abbaiava come se stesse per mordermi) Vneg + んばかりに. conterfactual. ん è abbreviazione della negazione ぬ" },
    { "key": "にひきかえ", value: "contrariamente a. Nにひきかえ, Vのにひきかえ, na-adjなのにひきかえ" },
    { "key": "にいたっては", value: "人間の体は６０％が水、魚は７５％、くらげにいたっては９６％が水だ. è come の場合, ma si usa quando si indica un esempio estremo riespetto ad altri esempi" },
    { "key": "にかかわらず", value: "regardless of" },
    { "key": "にかかわらずvsにもかかわらず", value: "にかかわらず regardless of some condition - にもかかわらず nonostante un qualche impedimento" },
    { "key": "にかけては", value: "= については when it comes to (per cose su cui si eccelle) トムは数学にかけては自分の右に出る者はいない" },
    { "key": "にかたくない", value: "に難くない facile da 想像に難くない. si usa con 想像、推測、予測" },
    { "key": "に越したことはない", value: "non c'è niente di meglio che. the ~ the ~. 仲間は多いに越したことはない (the more friends you have, the better) 予防する（の）に越したことはない nothing is better than prevention" },
    { "key": "に相違ない", value: "= にちがいない" },
    { "key": "~に~ない", value: "can't. 出るに出られない (cannot manage to get out) non ci riesco anche se ci sto provando, per via di situazioni che non controllo" },
    { "key": "いつにもなく", value: "unusually" },
    { "key": "に応じて", value: "in response to, according to, depending on" },
    { "key": "にしろ", value: "even though (imperative form of SURU)" },
    { "key": "にせよ", value: "even though (imperative form of SURU)" },
    { "key": "にしたところで", value: "also, even for. sempre sostituibile con でも. 彼は日本語を20年も勉強しているが、その彼にしたところで、まだ分からない文法に時々出くわすそうだ" },
    { "key": "にして", value: "1. in (periodo di tempo in cui succede una cosa sorprendente)一夜にして白髪をつくる(farsi venire i capelli bianchi in una notte) 2. and 彼女は頭脳明晰にして端麗な秘書である(she is a brighth and also beautiful secretary)" },
    { "key": "にしてからが", value: "even 首相にしてからが (even the prime minister)" },
    { "key": "にしては", value: "高山さんは日本人にしては大きい takayama è grosso, per essere un giapponese" },
    { "key": "にしても", value: "even if (è coniugazione di にする, decidere di) ピアノを買うにしても、こんな狭いアパートは置くところがない" },
    { "key": "にとどまらず N1", value: "without being limited to... " },
    { "key": "につけ", value: "ogni volta che. ナポリで捕った両親の写真を見るにつけ、あの時の楽しかった旅行を思い出す. si usa solo con verbi di percezione, tipo 'ogni volta che vedo', 'ogni volta che leggo' ecc" },
    { "key": "にわたって", value: "in uno span di tempo o di spazio. 16時間にわたって per 16 ore 一時から9時にわたって dall'una alle 9" },
    { "key": "によらず N1", value: "without depending on, without, indipendentemente da" },
    { "key": "によると", value: "according to (a news source, for example)" },
    { "key": "のみならず", value: "not only, but also" },
    { "key": "のなんのって", value: "so much that. 甘いのなんのって私は一口食べて全部残してしまいました" },
    { "key": "のなさ", value: "の無さ" },
    { "key": "んとする", value: "= ようとする. try to do 言わんとする (try to say). immagino che ん sia ぬ negativo" },
    { "key": "を中心に", value: "with something at the center" },
  ]

  i: number = 0
  isSolutionVisible: boolean = false
  constructor() { }


  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


  ngOnInit() {
    this.grammars = this.shuffle(this.grammars)
  }

  ok() {
    this.isSolutionVisible = false;
    this.grammars.splice(this.i, 1)
    if (this.i == this.grammars.length)
      this.i = 0
    if (this.i > 10)
      this.i = 0
  }

  ko() {
    this.isSolutionVisible = false;
    this.i = this.i + 1
    if (this.i == this.grammars.length)
      this.i = 0
    if (this.i > 10)
      this.i = 0
  }

  showsolution() {
    this.isSolutionVisible = true;
  }
}
