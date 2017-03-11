import Home from './components/Home.vue'
import Money from './components/Money.vue'
import UserInfo from './components/UserInfo.vue'
import LoadApplication from './components/LoadApplication.vue'
import MyInformation from './components/MyInformation.vue'
import PersonalInformation from './components/PersonalInformation.vue'
import WorkInformation from './components/WorkInformation.vue'
import IdentityAuthentication from './components/IdentityAuthentication.vue'
import BindBankCard from './components/BindBankCard.vue'
import Login from './components/Login.vue'
import Reg from './components/Reg.vue'
import TransactionRecord from './components/TransactionRecord.vue'
import BackMonye from './components/Backmonye.vue'
import Load from './components/Loan.vue'
import Helpcenter from './components/HelpCenter.vue'
import CommonProblem from './components/CommonProblem.vue'
import Feedback from './components/Feedback.vue'
import SetUp from './components/SetUp.vue'
import ResetPassword from './components/ResetPassword.vue'
import BindMailbox from './components/BindMailbox.vue'
import BankCard from './components/BankCard.vue'
import ResetPhoneNumber from './components/ResetPhoneNumber.vue'
import AddBankCard from './components/AddBankCard.vue'
import CertificationSuccess from './components/CertificationSuccess.vue'



export default[{
	path:'/home',
	component:Home
},{
	path:'/user-info',
	component:UserInfo
},{
	path:'/money',
	component:Money
},{
	path:'/loanApplication',
	component:LoadApplication
},{
	path:'/myInformation',
	component:MyInformation
},{
	path:'/personalInformation',
	component:PersonalInformation
},{
	path:'/workInformation',
	component:WorkInformation
},{
	path:'/identityAuthentication',
	component:IdentityAuthentication
},{
	path:'/bindBankCard',
	component:BindBankCard
},{
	path:'/login',
	component:Login
},{
	path:'/reg',
	component:Reg
},{
	path:'/transactionRecord',
	component:TransactionRecord,
	children:[
	{
		path:'load',
		component:BackMonye
	},{
		path:'backmonye',
		component:Load
	}]
},{
	path:'/helpcenter',
	component:Helpcenter
},{
	path:'/commonProblem',
	component:CommonProblem
},{
	path:'/feedback',
	component:Feedback
},{
	path:'/setUp',
	component:SetUp
},{
	path:'/resetPassword',
	component:ResetPassword
},{
	path:'/bindMailbox',
	component:BindMailbox
},{
	path:'/bankCard',
	component:BankCard
},{
	path:'/resetPhoneNumber',
	component:ResetPhoneNumber
},{
	path:'/addBankCard',
	component:AddBankCard
},{
	path:'/certificationSuccess',
	component:CertificationSuccess
},{
	path:'/',
	redirect:'/home'
},{
	path:'*',
	redirect:'/home'
}]