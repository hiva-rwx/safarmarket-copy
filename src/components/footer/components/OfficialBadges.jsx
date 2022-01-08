import React from 'react'

const OfficialBadges = () => {
    return (
        <div className="official-badges text-left ml-8">
          <div className="header">
            <h4 className="py-4">
              <span>safar</span>estan
            </h4>
            <p>تلفن پشتیبانی : 1234567890</p>
          </div>
          <div className="content d-flex flex-wrap my-8">
            <div className="border-2 mx-2 my-2">
              <a href="#!">
                <img src="./images/etehadie-logo.png" alt="etehadie-logo" />
              </a>
            </div>
            <div className="border-2 mx-2 my-2">
              <a href="#!">
                <img src="./images/samandehi.png" alt="samandehi" />
              </a>
            </div>
            <div className="border-2 mx-2 my-2">
              <a href="#!">
                <img src="./images/etehadie-logo.png" alt="etehadie-logo" />
              </a>
            </div>
            <div className="border-2 mx-2 my-2">
              <a href="#!">
                <img src="./images/association.jpg" alt="association" />
              </a>
            </div>
          </div>
        </div>
    )
}

export default OfficialBadges
