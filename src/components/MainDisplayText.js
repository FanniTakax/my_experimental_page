import React from 'react';

const MainDisplayText = (props) => {

    const styleDisplay = {
        display: 'block',
    }
    const styleNoDisplay = {
        display: 'none',
    }

    return (
        <div>
            <div id="what-is-tea" style={props.visibility[0] ? styleDisplay : styleNoDisplay}>
                <p>Understanding the “Art of Tea” in its entirety is an age old question that we are still continuously exploring today. With brand new tea knowledge and discoveries unveiling themselves each day, the journey into the world of tea is an exciting and limitless adventure with room for us all to explore, connect and interact.</p>
                <p>Being an engaged crew of tea educators, we have been fortunate enough to receive many wonderful insights on tea from its history to its preparation, all the while diving deeper into the various varietals that stem from the miraculously versatile camellia sinensis plant. While we can’t begin to know everything about tea, we hope that we can help guide you with our extensive knowledge of what we do know about tea in this section.</p>
                <p>We know the importance of building a dynamic learning environment where you have all the tools you need to create your own personal tea journey. In addition to this, we know it is equally important to have a community forum where you have a voice to collaborate and share your ideas about tea and all its wonder. We look forward to your visits and your feedback as we share and discover the many facets of tea together.</p>
                <p>What is Tea? (cont.) There is a separate category for herbal blends and fruit infusions, which are more properly characterized as tisanes. A tisane refers to a caffeine-free blend consisting of herbs, botanicals and/or fruits prepared like a tea, but technically not a tea. If the drink does not have tea leaves from Camellia Sinensis, it is not a tea. It is most likely a tisane. Therefore, it would be an oxymoron to call something an herbal tea because it can only be one or the other.</p>
            </div>
            <div id="white-tea" style={props.visibility[1] ? styleDisplay : styleNoDisplay}>
                <p>White tea is comprised of new, young tea leaves and buds from the camellia sinensis plant and is only harvested for a few weeks each spring in the northern district of Fujian, China. The leaves are generally picked in mid-March to early April and only on days when it is not rainy or humid. Just like champagne, white tea can only be called “white tea” if it comes from the Fujian province. White tea gets its name from a silvery type down that covers the leaves and unopened buds, known as “Hao.”</p>
                <p>or many years it was believed that white tea was discovered during the Song Dynasty (920-1269), however, even earlier references to white tea have been traced as far back as the Tang Dynasty (618-907). At that time in history, white tea preparation was a very different experience than it is today: early harvest white tea leaves appeared solely in compressed cakes and broken pieces were steeped in earthenware kettles.</p>           
            </div>
            <div id="green-tea" style={props.visibility[2] ? styleDisplay : styleNoDisplay}>
                <p>Green tea</p>
            </div>
            <div id="puerh-tea" style={props.visibility[3] ? styleDisplay : styleNoDisplay}>
                <p>Pu-erh tea</p>
            </div>
            <div id="oolong-tea" style={props.visibility[4] ? styleDisplay : styleNoDisplay}>
                <p>Oolong tea</p>
            </div>
            <div id="black-tea" style={props.visibility[5] ? styleDisplay : styleNoDisplay}>
                <p>Black tea</p>
            </div>
        </div>
    )
}

export default MainDisplayText