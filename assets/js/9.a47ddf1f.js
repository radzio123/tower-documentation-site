(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{192:function(a,e,r){"use strict";r.r(e);var o=r(0),n=Object(o.a)({},function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"jak-uzywac-tower"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jak-uzywac-tower","aria-hidden":"true"}},[a._v("#")]),a._v(" Jak używać Tower?")]),a._v(" "),r("h2",{attrs:{id:"zalozenia"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zalozenia","aria-hidden":"true"}},[a._v("#")]),a._v(" Założenia")]),a._v(" "),r("p",[a._v("W Tower konfiguracja przechowywana jest stałej strukturze Projekt -> Środowisko -> Komponent -> Wersja. Czyli, w projekcie możemy mieć wiele środowisk, które mogą zawierać wiele konfiguracji danego komponentu w konkretnej wersji.")]),a._v(" "),r("p",[a._v("Każda konfiguracja też jest wersjonowana, co oznacza, że mamy pełny wgląd w historię konfiguracji z podziałem na daty jej obowiązywania.")]),a._v(" "),r("h2",{attrs:{id:"pierwsze-uruchomienie"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pierwsze-uruchomienie","aria-hidden":"true"}},[a._v("#")]),a._v(" Pierwsze uruchomienie")]),a._v(" "),r("h3",{attrs:{id:"pierwsze-kroki"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pierwsze-kroki","aria-hidden":"true"}},[a._v("#")]),a._v(" Pierwsze kroki")]),a._v(" "),r("p",[a._v("Po uruchomieniu przeglądarki internetowej i wejściu na adres URL wystawiony przez serwer Tower (zgodnie z konfiguracją "),r("router-link",{attrs:{to:"/configuration.html#host"}},[a._v("host")]),a._v(" i "),r("router-link",{attrs:{to:"/configuration.html#port"}},[a._v("port")]),a._v("), widzimy stronę logowania. Do pierwszego logowania używamy użytkownika "),r("em",[r("strong",[a._v("admin")])]),a._v(" z hasłem "),r("em",[r("strong",[a._v("admin")])]),a._v(".")],1),a._v(" "),r("p",[a._v("Od razu po pierwszym logowaniu użytkownik jest proszony o zmianę hasła.")]),a._v(" "),r("h3",{attrs:{id:"konfiguracja"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#konfiguracja","aria-hidden":"true"}},[a._v("#")]),a._v(" Konfiguracja")]),a._v(" "),r("p",[a._v("Pierwszą rzeczą, którą należy zrobić po poprawnym zalogowaniu jako użytkownik "),r("em",[r("strong",[a._v("admin")])]),a._v(", jest dodanie nowego środowiska. Aby to zrobić, przejść do zakładki settings->environments. Tam w polu Environment wpisujemy nazwę środowiska, które chcemy stworzyć i klikamy przycisk "),r("strong",[a._v("+")]),a._v(".")]),a._v(" "),r("h2",{attrs:{id:"tworzenie-bazowej-konfiguracji"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tworzenie-bazowej-konfiguracji","aria-hidden":"true"}},[a._v("#")]),a._v(" Tworzenie bazowej konfiguracji")]),a._v(" "),r("p",[a._v('Aby stworzyć nową konfigurację, pierwszą rzeczą, którą należy zrobić, jest dodanie "'),r("em",[a._v("konfiguracji bazowej")]),a._v("\", czyli informacji jakie zmienne zawiera konfiguracja, jakiego są one typu i jakie mają domyślne wartości. Aby stworzyć taką konfigurację, należy wywołać API REST'owe serwera Tower spod URI "),r("em",[a._v("/configurations/addComponent")]),a._v(", pamiętając o tym, że tylko zalogowany użytkownik może wykonywać zapytania do API.\nDane, które są przyjmowane w "),r("em",[a._v("body")]),a._v(" zapytania, powinny zawierać informacje o zmiennych komponentu, którego konfigurację chcemy przechowywać, np:")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('[\n  {\n    "name":"String Variable",\n    "type":"string",\n    "value":"initial value"\n },\n {\n    "name":"Number Variable",\n    "type":"number",\n    "value": 1234\n },\n {\n    "name":"Boolean Variable",\n    "type":"boolean",\n    "value": false\n },\n {\n    "name":"Password variable",\n    "type":"password",\n    "value": "My_SeCrEt"\n }\n]\n')])])]),r("p",[a._v("W tym wypadku przekazujemy 4 zmienne. Każda z tych zmiennych ma swoją nazwę "),r("em",[r("strong",[a._v("name")])]),a._v(", typ "),r("em",[r("strong",[a._v("type")])]),a._v(" oraz wartość "),r("em",[r("strong",[a._v("value")])]),a._v(".\nWartość "),r("em",[a._v("name")]),a._v(" pozawala nam nazwać naszą zmienną. Może być to dowolny ciąg znaków, lecz nie może się od powtarzać w obrębie jednej konfiguracji."),r("br"),a._v("\nZmienna "),r("em",[a._v("value")]),a._v(" przedstawia domyślną wartość dla naszej zmiennej."),r("br"),a._v("\nWartość "),r("em",[a._v("type")]),a._v(" pozwala nam określić jakiego typu jest wartość.   Dozwolone typy to "),r("em",[a._v("string")]),a._v(", "),r("em",[a._v("number")]),a._v(", "),r("em",[a._v("boolean")]),a._v(" i "),r("em",[a._v("password")]),a._v(". Każdy z tych typów ma zachowuje się inaczej:")]),a._v(" "),r("h4",{attrs:{id:"string"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#string","aria-hidden":"true"}},[a._v("#")]),a._v(" string")]),a._v(" "),r("p",[a._v("String to zwykły ciąg znaków, jest to domyślny typ dla wszystkich wartości w Tower.")]),a._v(" "),r("h4",{attrs:{id:"number"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#number","aria-hidden":"true"}},[a._v("#")]),a._v(" number")]),a._v(" "),r("p",[a._v("Number jest dowolną wartością numeryczną.")]),a._v(" "),r("h4",{attrs:{id:"boolean"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#boolean","aria-hidden":"true"}},[a._v("#")]),a._v(" boolean")]),a._v(" "),r("p",[a._v("Boolean przedstawia zmienną logiczną przyjmującą wartości "),r("em",[a._v("true")]),a._v(" lub "),r("em",[a._v("false")])]),a._v(" "),r("h4",{attrs:{id:"password"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#password","aria-hidden":"true"}},[a._v("#")]),a._v(" password")]),a._v(" "),r("p",[a._v("Password zachowuje się podobnie do wartości "),r("em",[a._v("string")]),a._v(", ale w bazie danych jest przechowywana w postaci zaszyfrowanej.")])])},[],!1,null,null,null);e.default=n.exports}}]);