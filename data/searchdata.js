var promotions = {
  "banksparing" : {"header": "Det er lurt å spare i bank!",
            "text": "Da får du nemlig rente på pengene dine!", 
            "name": "Den som sparer, han har!", 
            "url": "http://www.storebrand.no/site/stb.nsf/Pages/sparekonto.html"},            
  "fond" : {"header": "Vet du hva du får i fond",
            "text": "Write something here", 
            "name": "write something here", 
            "url": "dummy.html"},
  "lån" : {"header": "Vet du hva du får i bank og lån",
           "text": "Write something here", 
           "name": "Write something here", 
           "url":"dummy.html"},
  "søk" : {"header": "Vet du hva du får i pensjon",
           "text": "Write something here", 
           "name": "Write something here", 
           "url":"dummy.html"},
  "eiendom" : { "header": "Storebrand Eiendom er en av Norges største eiendomsforvaltere.",
                "text": "Vi eier kjøpesentre, kontorbygg og lagerbygg.",
                "name": "Se tjenestene våre",
                "url": "dummy.html"},
  "Rapporter" : { "header": "Q2 rapporten er klar.",
                "text": "En god periode med godt resultat er stikkordene fra pressen",
                "name": "Finn rapportene her",
                "url": "dummy.html"},  
  "Rapporter" : { "header": "Q3 rapporten er klar.",
                "text": "En god periode med godt resultat er stikkordene fra pressen",
                "name": "Finn rapportene her",
                "url": "dummy.html"},                 
  "Kalkulator" : { "header": "Bilkalulator.",
                "text": "Vi har beste pris",
                "name": "Finn rapportene her",
                "url": "dummy.html"}, 
  "kontorbygg" : { "header": "Storebrand Eiendom forvalter mange kontorbygg.",
                "text": "Lei kontor fra oss!",
                "name": "Se kontorbyggene våre",
                "url": "dummy.html"}                
};

var typeaheads = {
  "Anbefalte" :
    [    
      {"name": "Fond"},
      {"name": "Fondssparing"},    
      {"name": "Bank"},
      {"name": "Banksparing"},
      {"name": "Forsikring"},
      {"name": "Bilhenger"},
      {"name": "Pensjon"}
    ],
    "Storebrand" :
    [
      {"name": "Kvartalsrapporter","url" : "http://www.storebrand.no/site/stb.nsf/Pdfkvartalsrapporterprselskap?Openview&RestrictToCategory=Storebrand%20Asa%202013"},
      {"name": "Bærekraft","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsidebarekraft.html"},
      {"name": "Presse","url":"http://www.storebrand.no/site/stb.nsf/Pages/newsdesk.html#/"},
      {"name": "Pressekontakter","url":"http://www.storebrand.no/site/stb.nsf/Pages/newsdesk.html#/"},
      {"name": "Jobb i Storebrand","url":"http://www.storebrand.no/site/stb.nsf/pages/hovedsidejobbistorebrand.html"},
      {"name": "Kundefordeler","url":"../vanlig/tema3/kundefordeler.html"}
    ],
  "Fond" :
    [
      {"name": "Fond","url" : "http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
      {"name": "Fondslister","url":"http://www.storebrand.no/site/stb.nsf/Pages/fondsliste-utvalgte-fond.html"},
      {"name": "Lær mer om fondsparing","url":"http://www.storebrand.no/site/stb.nsf/pages/fond_sparing.html"},
      {"name": "Bærekraft","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsidebarekraft.html"},
      {"name": "Kjøp fond","url":"https://www2.storebrand.no/fondweb/productinfo.html"},
      {"name": "Våre anbefalte fond","url":"https://www2.storebrand.no/spareveileder/general.html"},
      {"name": "Delphi","url":"https://www.delphi.no/site/delphino.nsf/Pages/hjem.html"}
    ],
  "Pensjon" :
    [
      {"name": "Lær om pensjon","url" : "../vanlig/kategori/pensjon.html"},
      {"name": "Pensjonskalkulator","url":"../vanlig/verktoy/pensjonstall.html"},
      {"name": "Pensjonssparing","url":"../vanlig/artikkel/pensjonssparing.html"},
      {"name": "Egen sparing pensjon","url":"../vanlig/produkt/egensparingpensjon.html"}
    ],
  "Bank" :
    [
      {"name": "Banksparing","url" : "../vanlig/kategori/sparing.html"},
      {"name": "Bank og LÅn","url":"../vanlig/kategori/bankoglaan.html"},
      {"name": "Bolig lån","url":"../vanlig/produkt/boliglaan.html"},
      {"name": "Bolig lån for unge","url":"../vanlig/produkt/boliglaanunge.html"},
      {"name": "Lånekalkulator","url":"../vanlig/verktoy/laanekalkulator.html"},
      {"name": "Dagens Lånerenter","url":"../vanlig/artikkel/dagenslaanerenter.html"},
      {"name": "Søke boliglån","url":"../vanlig/artikkel/sokeboliglaan.html"},
      {"name": "Vilkår for boliglån","url":"../vanlig/artikkel/vilkaarboliglaan.html"}
    ],
  "Forsikring" :
    [
      {"name": "Tips om forsikring","url":"../vanlig/kategori/forsikring.html"},
      {"name": "Bilforsikring","url":"../vanlig/produkt/bilforsikring.html"},
      {"name": "Bil og kjøretøy","url" : "../vanlig/tema2/bilogkjoretoy.html"},
      {"name": "Hus og hjem","url" : "../vanlig/tema2/husoghjem.html"},
      {"name": "At om bilforsikring","url" : "../vanlig/artikkel/bilforsikring.html"},
      {"name": "Bonus på Kjøretøy","url" : "../vanlig/artikkel/bonuskjoretoy.html"},
    ],
  "Minside" :
    [
      {"name": "Betal regning","url" : "dummy.html"},
      {"name": "Min oversikt","url":"dummy.html"},
      {"name": "Mitt forbruk","url":"dummy.html"},
      {"name": "Efaktura","url":"dummy.html"},
      {"name": "Kort og kreditt","url":"dummy.html"},
      {"name": "Anders Losvik","url":"dummy.html"},
      {"name": "Bjørn Christian Tørrissen'","url":"http://bjornfree.com/"},
      {"name": "Mine kontoer","url":"dummy.html"},
      {"name": "Mine innstillinger","url":"dummy.html"},
      {"name": "Søk lån","url":"dummy.html"},
      {"name": "Banksparing","url":"dummy.html"},
      {"name": "Nettbank","url":"dummy.html"},
      {"name": "Sikker chat - logg inn","url":"dummy.html"}
    ]
};