<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>
          RSS Feed |
          <xsl:value-of select="/atom:feed/atom:title"/>
        </title>
        <meta charset="utf-8"/>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="/atom.css"/>
      </head>
      <body>
        <main>
          <div class="info">
            <strong>This is an RSS feed</strong>. Subscribe by copying
            the URL from the address bar into your newsreader.
          </div>
          <div class="content">
            <h1>
              RSS Feed Preview
            </h1>
            <h2 class="muffinman"><span class="gradient">muffinman</span><span class="domain">.io</span></h2>
            <p>
              <xsl:value-of select="/atom:feed/atom:subtitle"/>
            </p>
            <a class="small">
              <xsl:attribute name="href">
                <xsl:value-of select="/atom:feed/atom:link[2]/@href"/>
              </xsl:attribute>
              Visit Website &#x2192;
            </a>

            <h2 class="list-title">Blog posts and generative drawings</h2>

            <ul class="list">
              <xsl:for-each select="/atom:feed/atom:entry">
                <li class="list-item">
                  <a class="list-link">
                    <xsl:attribute name="href">
                      <xsl:value-of select="atom:link/@href"/>
                    </xsl:attribute>
                    <xsl:value-of select="atom:title"/>
                    <span class="list-arrow">&#x2192;</span>
                  </a>
                  <div class="list-date small">
                    Published: <xsl:value-of select="substring(atom:updated, 0, 11)" />
                  </div>
                </li>
              </xsl:for-each>
            </ul>
          </div>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
