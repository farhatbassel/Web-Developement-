import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import './featuredInfo.scss'

export default function FeaturedInfo() {
    return (
        <section className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4<ArrowDownward className='featuredIcon negative' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,543</span>
                    <span className="featuredMoneyRate">11.4<ArrowUpward className='featuredIcon' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Costs</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-8.4<ArrowDownward className='featuredIcon negative' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </section>
    )
}
