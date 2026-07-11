import React from 'react';
import InstantLoanSim from './InstantLoanSim';
import FakeInterviewSim from './FakeInterviewSim';
import PhoneDealSim from './PhoneDealSim';
import GoldCoinSim from './GoldCoinSim';
import LuckyDrawSim from './LuckyDrawSim';
import CreditCardSim from './CreditCardSim';
import GiftDeliverySim from './GiftDeliverySim';
import RewardPointsSim from './RewardPointsSim';
import JobOfferSim from './JobOfferSim';
import CryptoSim from './CryptoSim';
import DigitalArrestSim from './DigitalArrestSim';
import DeepfakeSim from './DeepfakeSim';
import BankKYCSim from './BankKYCSim';
import InstagramSim from './InstagramSim';
import ElectricityBillSim from './ElectricityBillSim';
import TaxSim from './TaxSim';
import CorpPhishingSim from './CorpPhishingSim';
import SIMUpgradeSim from './SIMUpgradeSim';
import ScholarshipSim from './ScholarshipSim';
import CopyrightSim from './CopyrightSim';
import ParcelSim from './ParcelSim';
import CharityScamSim from './CharityScamSim';
import WiFiSim from './WiFiSim';
import TechSupportSim from './TechSupportSim';
import BrowserNotificationSim from './BrowserNotificationSim';
import ClipboardHijackSim from './ClipboardHijackSim';
import CryptoDrainerSim from './CryptoDrainerSim';
import FakeAntivirusSim from './FakeAntivirusSim';
import ESIMHijackSim from './ESIMHijackSim';
import MissedCallSim from './MissedCallSim';
import InternationalCallSim from './InternationalCallSim';
import WhatsAppOTPSim from './WhatsAppOTPSim';
import SMSSpoofingSim from './SMSSpoofingSim';
import EmailSpoofingSim from './EmailSpoofingSim';
import CallerIDSpoofingSim from './CallerIDSpoofingSim';
import RobocallSim from './RobocallSim';
import FakeFlightTicketSim from './FakeFlightTicketSim';
import FakeHotelBookingSim from './FakeHotelBookingSim';
import FakeVisaApprovalSim from './FakeVisaApprovalSim';
import FakeTravelPackageSim from './FakeTravelPackageSim';

const SIM_MAP = {
  0: InstantLoanSim,
  1: FakeInterviewSim,
  2: PhoneDealSim,
  3: GoldCoinSim,
  4: LuckyDrawSim,
  5: CreditCardSim,
  6: GiftDeliverySim,
  7: RewardPointsSim,
  8: JobOfferSim,
  9: CryptoSim,
  10: DigitalArrestSim,
  11: DeepfakeSim,
  12: BankKYCSim,
  13: InstagramSim,
  14: ElectricityBillSim,
  15: TaxSim,
  16: CorpPhishingSim,
  17: SIMUpgradeSim,
  18: ScholarshipSim,
  19: CopyrightSim,
  20: ParcelSim,
  21: CharityScamSim,
  22: WiFiSim,
  126: TechSupportSim,
  127: BrowserNotificationSim,
  128: ClipboardHijackSim,
  129: CryptoDrainerSim,
  130: FakeAntivirusSim,
  131: ESIMHijackSim,
  132: MissedCallSim,
  133: InternationalCallSim,
  134: WhatsAppOTPSim,
  135: SMSSpoofingSim,
  136: EmailSpoofingSim,
  137: CallerIDSpoofingSim,
  138: RobocallSim,
  139: FakeFlightTicketSim,
  140: FakeHotelBookingSim,
  141: FakeVisaApprovalSim,
  142: FakeTravelPackageSim,
};

export default function ScamSimulatorEngine({ moduleId, moduleData, formData, handleInputChange, handleSimulationSubmit }) {
  const SimComponent = SIM_MAP[moduleId];
  
  if (SimComponent) {
    return <SimComponent onComplete={handleSimulationSubmit} />;
  }

  // Fallback for any module without a custom simulator
  return (
    <div className="simulation-card bg-glass" style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <div className="sim-badge" style={{ color: 'var(--accent)', fontWeight: 'bold', marginBottom: '1rem' }}>
        {moduleData.badge}
      </div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{moduleData.amountLabel}</h3>
      <div className="sim-amount" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--green)', marginBottom: '1.5rem' }}>
        {moduleData.amount}
      </div>
      
      <form onSubmit={handleSimulationSubmit}>
        {moduleData.fields.map(field => (
          <div key={field.n} className="form-group" style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>{field.p}</label>
            <input 
              type={field.t}
              className="form-input"
              placeholder={`Enter ${field.p}`}
              value={formData[field.n] || ''}
              onChange={e => handleInputChange(field.n, e.target.value)}
              required
            />
          </div>
        ))}
        
        <div className="sim-fee-note" style={{ fontSize: '0.9rem', color: 'var(--text2)', margin: '1rem 0' }}>
          {moduleData.feeNote}
        </div>
        
        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
          {moduleData.fee}
        </button>
      </form>
    </div>
  );
}
