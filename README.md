```
The Chameleon on the Web: an Empirical Study of the Insidious Proactive Web Defacements
Rui Zhao, University of Nebraska at Omaha
to appear in Proceedings of the Web Conference (formerly known as the WWW Conference), 2023.
```

# Abstract

Web defacement is one of the major promotional channels for online underground economies. It regularly compromises benign websites and injects fraudulent content to promote illicit goods and services. It inflicts significant harm to websites’ reputations and revenues and may lead to legal ramifications. In this paper, we uncover proactive web defacements, where the involved web pages (i.e., landing pages) proactively deface themselves within browsers using JavaScript (i.e., control scripts). Proactive web defacements have not yet received attention from research communities, anti-hacking organizations, or law-enforcement officials. To detect proactive web defacements, we designed a practical tool, PACTOR. It runs in the browser and intercepts JavaScript API calls that manipulate web page content. It takes snapshots of the rendered HTML source code immediately before and after the intercepted API calls and detects proactive web defacements by visually comparing every two consecutive snapshots. Our two-month empirical study, using PACTOR, on 2,454 incidents of proactive web defacements shows that they can evade existing URL safety-checking tools and effectively promote the ranking of their landing pages using legitimate content/keywords. We also investigated the vendor network of proactive web defacements and reported all the involved domains to law-enforcement officials and URL-safety checking tools.

# Demo of proactive web defacements

https://user-images.githubusercontent.com/10173153/215888977-233b3f66-02bc-45fb-be53-ee6b292971d8.mp4

# Repo structure:

   |--- controlscripts: the 154 control scripts; their URLs are anonymized.
   
   |--- snapshots: the snapshots of http://www.1*i.com/.
