import "./index.scss"

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero-section">
        <img className="logo" src="images/logo.png" />
        <div className="info">
          <h1>Snip content from across the web & save them at one place</h1>
          <p>
            Cutouts let you pick content from websites and store them into your
            own collection. Save images, text, videos, color codes, links and
            more in just a couple clicks
          </p>

          <div className="cta">
            <a
              href="https://chrome.google.com/webstore/detail/cutouts/jcjaaeialhaakckfpmpkipnjeiggekib?hl=en-GB&authuser=0"
              target="_blank"
            >
              <button>
                <img src="images/chrome.svg" />
                Install on Chrome
              </button>
            </a>
            <a
              href="https://www.producthunt.com/posts/cutouts?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-cutouts"
              target="_blank"
              style={{ width: "250px", height: "45px" }}
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=235365&theme=light"
                alt="Cutouts - The Pinterest for your clipboard. Be inspired & productive | Product Hunt Embed"
                style={{ width: "250px", height: "45px" }}
                width="250px"
                height="45px"
              />
            </a>
          </div>
        </div>

        <picture className="hero-banner">
          <source srcset="images/hero-m.jpg" media="(max-width: 700px)" />
          <img src="images/hero.jpg" alt="" />
        </picture>
      </section>
      <section>
        <h2>Find anything interesting worth saving for later? Simply Cutout</h2>
        <picture className="banner">
          <source srcset="images/how-m.jpg" media="(max-width: 700px)" />
          <img src="images/how.jpg" alt="" />
        </picture>
      </section>

      <section className="features">
        <h2>The Smart Clipboard Manager You Deserve</h2>
        <picture className="banner">
          <img src="images/what.jpg" alt="" />
        </picture>
      </section>

      <section className="personas">
        <h2>Anyone can use Cutouts</h2>

        <div className="persona">
          <article>
            <img src="images/ostrich.jpg" />
            <h3>Writers</h3>
            <p>
              Save text highlights from the web and collect inspiration & data
              for your next big article or award winning ad.
            </p>
          </article>
          <article>
            <img src="images/toucan.jpg" />
            <h3>Designers</h3>
            <p>
              Save images & videos and generate moodboards on the fly. Also
              never be short of color inspirations
            </p>
          </article>
          <article>
            <img src="images/penguin.jpg" />
            <h3>Researchers</h3>
            <p>
              Collect data and find unexpected connections between bits of
              information. Never move away from your active tab.
            </p>
          </article>
        </div>
      </section>

      <section className="secure">
        <h2>Cutouts Is Free and Secure!</h2>
        <p>
          Cutouts saves your collection on your own local storage. Hence, your
          data never leaves your system and is always secure. To add a cherry on
          top, Cutouts is free forver!
        </p>
        <div className="cta">
          <a
            href="https://chrome.google.com/webstore/detail/cutouts/jcjaaeialhaakckfpmpkipnjeiggekib?hl=en-GB&authuser=0"
            target="_blank"
          >
            <button>
              <img src="images/chrome.svg" />
              Install on Chrome
            </button>
          </a>
          <a
            href="https://www.producthunt.com/posts/cutouts?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-cutouts"
            target="_blank"
            style={{ width: "250px", height: "45px" }}
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=235365&theme=light"
              alt="Cutouts - The Pinterest for your clipboard. Be inspired & productive | Product Hunt Embed"
              style={{ width: "250px", height: "45px" }}
              width="250px"
              height="45px"
            />
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
