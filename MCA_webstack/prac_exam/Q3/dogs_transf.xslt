<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE xsl:stylesheet SYSTEM "http://www.w3.org/TR/xslt/xsl.dtd">
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <title>Dogs Information</title>
      </head>
      <body>
        <h1>Dogs Information</h1>
        <table border="1">
          <tr>
            <th>Breed</th>
            <th>Color</th>
            <th>Country</th>
            
            
          </tr>
          <xsl:for-each select="dogs/dog">
            <tr>
              <td><xsl:value-of select="breed"/></td>
              <td><xsl:value-of select="color"/></td>
              <td><xsl:value-of select="country"/></td>
              
              
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
