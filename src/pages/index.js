import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="left-area">
      Left
    </div>
    <div className="center-area">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
    <div className="right-area">
      <p>
        Untuk mempererat rasa persaudaraan sesama perantau asal Jawa
        Barat, dibentuklah Rumpun Wargi Pasundan, info lengkap yuk simak
        obrolan VOA Gondangdia bersama Madila ketua dari Rumpun Wargi
        Pasundan.
        <br/><br/>
        “Batur jadi dulur, dulur beuki akur,” yang artinya “Orang lain jadi saudara,
        saudara tambah akur.” Itulah slogan dari paguyuban Rumpun Wargi
        Pasundan (RWP) di wilayah Washington, DC. Kelompok yang sudah
        berdiri sejak tahun 2002 ini bertekad untuk mempromosikan Indonesia,
        khususnya kebudayaan Pasundan di AS, melalui kuliner, seni, dan
        ilmu pengetahuan. Tidak ketinggalan, sebentar lagi RWP juga akan
        mendongkrak popularitas sate Maranggi dengan memperkenalkannya
        ke warga AS. Simak penuturan sang ketua, Muhamad Madilah, di 
        <a href="http://bit.ly/1Rg6x6s">http://bit.ly/1Rg6x6s</a>
        <br/><br/>
        Untuk mempererat rasa persaudaraan sesama perantau asal Jawa
        Barat, dibentuklah Rumpun Wargi Pasundan, info lengkap yuk simak
        obrolan VOA Gondangdia bersama Madila ketua dari Rumpun Wargi
        Pasundan.
      </p>
    </div>
  </Layout>
)

export default IndexPage
