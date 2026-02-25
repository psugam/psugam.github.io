+++
title= "How to create a Hugo Theme from scratch"
date= "2022-01-25"

tags = ['Substack']
categories= ['Hugo', 'Tutorial']
showFrontMatter=true
type="post"
[build]
  list="never"
+++

I recently finished creating a hugo theme from scratch and want to share my experience. This is primarily intended for my own use as I have a tendency to forget things quickly but also because there seems to be a lack of good resources on this topic on the internet. Hugo tutorials usually assume that you're using a theme. The tutorials on creating custom themes seem to be unusally surface level and rarely go beyond the most bare-bones stuff. Of course, this one's not an encyclopedia either but I hope it will be of some use.

I assume that the reader is familiar with basic html, css and javascript as well as some git but not much else.

## Getting Started

To get started, go to the folder of your choice and run:
{{<codeblock lang="bash">}}
hugo new site my-site
{{</codeblock>}}
where `my-site` is the folder you want your site to be in. 

This creates the basic folder structure for your hugo site like this:

{{<codeblock lang="bash">}}


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         12/4/2025   5:16 PM                archetypes
d-----         12/4/2025   5:16 PM                assets
d-----         12/4/2025   5:16 PM                content
d-----         12/4/2025   5:16 PM                data
d-----         12/4/2025   5:16 PM                i18n
d-----         12/4/2025   5:16 PM                layouts
d-----         12/4/2025   5:16 PM                static
d-----         12/4/2025   5:16 PM                themes
-a----         12/4/2025   5:16 PM             83 hugo.toml
{{</codeblock>}}

All of these, with the exception of archetypes and hugo.toml, empty. We'll learn what they should contain afterwards. 
The `hugo.toml` contains the following now:
{{<codeblock lang="toml">}}
baseURL = 'https://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'
{{</codeblock>}}

Notice that there's no `theme` parameter. If you try to run your site with ```hugo``` or ```hugo server``` or something like this. It would return an empty file. Hugo needs a theme, however simple to work. Hugo lets users create a basic theme. You can do this using the following command: 
{{<codeblock lang="bash">}}
hugo new theme my-theme
{{</codeblock>}}
where `my-theme` is the name of your theme. A folder of the name `my-theme` will appear inside the `themes` folder with the following structure:

{{<codeblock lang="bash">}}

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         12/4/2025   6:09 PM                archetypes   
d-----         12/4/2025   6:09 PM                assets       
d-----         12/4/2025   6:09 PM                content      
d-----         12/4/2025   6:09 PM                data
d-----         12/4/2025   6:09 PM                i18n        
d-----         12/4/2025   6:09 PM                layouts      
d-----         12/4/2025   6:09 PM                static       
-a----         12/4/2025   6:09 PM            385 hugo.toml  
{{</codeblock>}}

They have some dummy data inside them that will be useful. If you try to run your ````hugo server``` again, you will still not get any reasonable output. To get a basic skeleton of a site, include your theme name inside your *hugo.toml* ( the one inside your root folder) as follows:
{{<codeblock lang="toml">}}
baseURL = 'https://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'
theme='my-theme' # or whatever your theme's name is 
{{</codeblock>}}
Now you'll have a basic skeleton of a site running if you run ```hugo server``` on your root folder. It has very basic styling but the bare structure of your theme is already there. Everything that we'll add from hereon is just adding features to this building.


{{<figure src="basic-example.png" width="100%" caption="Fig: Basic Hugo Site Structure" class="center" >}}

## Templates and Partials
Inside your `themes\my-theme\layouts\` there are mutiple html files and a `_partial` folder.

### Layouts
The following files are present in the layouts folder. 
{{<codeblock lang="bash">}}

Mode                 LastWriteTime         Length Name        
----                 -------------         ------ ----        
d-----         12/4/2025   6:09 PM                _partials   
-a----         12/4/2025   6:09 PM            351 baseof.html  
-a----         12/4/2025   6:09 PM            207 home.html   
-a----         12/4/2025   6:09 PM            325 page.html    
-a----         12/4/2025   6:09 PM            220 section.html 
-a----         12/4/2025   6:09 PM            168 taxonomy.htm 
                                                  l
-a----         12/4/2025   6:09 PM            168 term.html   
{{</codeblock>}}
Each of these have a basic skeleton of html that are used by hugo to generate a site.
- `baseof.html` contains the basic format of site.
  {{<codeblock lang="html">}}
<!DOCTYPE html>
<html lang="{{ site.Language.LanguageCode }}" dir="{{ or site.Language.LanguageDirection `ltr` }}">
<head>
  {{ partial "head.html" . }}
</head>
<body>
  <header>
    {{ partial "header.html" . }}
  </header>
  <main>
    {{ block "main" . }}{{ end }}
  </main>
  <footer>
    {{ partial "footer.html" . }}
  </footer>
</body>
</html>
  {{</codeblock>}}

    The `partial` references the files in the `_partial` folder. 