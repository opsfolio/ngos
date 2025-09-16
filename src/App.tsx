import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import Index from "./pages/Index";
import PlansExpectations from "./pages/PlansExpectations";
import Expectations from "./pages/Expectations";
import Progress from "./pages/Progress";
import Outcomes from "./pages/Outcomes";
import ControlsExplorer from "./pages/ControlsExplorer";
import PoliciesLibrary from "./pages/PoliciesLibrary";
import PolicyAuthor from "./pages/PolicyAuthor";
import PolicyMapping from "./pages/PolicyMapping";
import EvidenceManagement from "./pages/EvidenceManagement";
import EvidenceBrowsing from "./pages/EvidenceBrowsing";
import EvidenceIntegrations from "./pages/EvidenceIntegrations";
import EvidenceUpload from "./pages/EvidenceUpload";
import EvidenceMapping from "./pages/EvidenceMapping";
import AuditCenter from "./pages/AuditCenter";
import AuditBrowse from "./pages/AuditBrowse";
import AuditCreate from "./pages/AuditCreate";
import AuditDetail from "./pages/AuditDetail";
import RisksLibrary from "./pages/RisksLibrary";
import RiskRegister from "./pages/RiskRegister";
import PrivacyRiskAssessment from "./pages/PrivacyRiskAssessment";
import AuditRisks from "./pages/AuditRisks";
import POAMRisks from "./pages/POAMRisks";
import ThreatManagement from "./pages/ThreatManagement";
import VulnerabilityScanning from "./pages/VulnerabilityScanning";
import PenetrationTesting from "./pages/PenetrationTesting";
import AssetIntelligence from "./pages/AssetIntelligence";
import AssetServers from "./pages/AssetServers";
import AssetWorkstations from "./pages/AssetWorkstations";
import AssetCloudAssets from "./pages/AssetCloudAssets";
import AssetApplications from "./pages/AssetApplications";
import AssetNetworkDevices from "./pages/AssetNetworkDevices";
import AssetThreats from "./pages/AssetThreats";
import AssetPOAMs from "./pages/AssetPOAMs";
import AssetAIContext from "./pages/AssetAIContext";
import QualityIntelligence from "./pages/QualityIntelligence";
import TestManagement from "./pages/TestManagement";
import RequirementsTraceability from "./pages/RequirementsTraceability";
import RiskAnalysisFMEA from "./pages/RiskAnalysisFMEA";
import CAPAManagement from "./pages/CAPAManagement";
import { TeamManagement } from "./pages/TeamManagement";
import { TeamMembers } from "./pages/TeamMembers";
import { TeamRoles } from "./pages/TeamRoles";
import { TeamTasks } from "./pages/TeamTasks";
import IncidentManagement from "./pages/IncidentManagement";
import Observability from "./pages/Observability";
import AICopilot from "./pages/AICopilot";
import LegalInsurance from "./pages/LegalInsurance";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/progress/expectations" element={<Expectations />} />
            <Route path="/progress/outcomes" element={<Outcomes />} />
            <Route path="/controls" element={<ControlsExplorer />} />
            <Route path="/policies" element={<PoliciesLibrary />} />
            <Route path="/policies/author" element={<PolicyAuthor />} />
            <Route path="/policies/mapping" element={<PolicyMapping />} />
            <Route path="/evidence" element={<EvidenceManagement />} />
            <Route path="/evidence/browse" element={<EvidenceBrowsing />} />
            <Route path="/evidence/integrations" element={<EvidenceIntegrations />} />
            <Route path="/evidence/upload" element={<EvidenceUpload />} />
            <Route path="/evidence/mapping" element={<EvidenceMapping />} />
            <Route path="/audits" element={<AuditCenter />} />
            <Route path="/risks" element={<RisksLibrary />} />
            <Route path="/risks/register" element={<RiskRegister />} />
            <Route path="/risks/audit-risks" element={<AuditRisks />} />
            <Route path="/risks/poam-risks" element={<POAMRisks />} />
            <Route path="/threats" element={<ThreatManagement />} />
            <Route path="/threats/vulnerability-scan" element={<VulnerabilityScanning />} />
            <Route path="/threats/pen-testing" element={<PenetrationTesting />} />
            <Route path="/incidents" element={<IncidentManagement />} />
            <Route path="/observability" element={<Observability />} />
            <Route path="/assets" element={<AssetIntelligence />} />
            <Route path="/assets/servers" element={<AssetServers />} />
            <Route path="/assets/workstations" element={<AssetWorkstations />} />
            <Route path="/assets/cloud" element={<AssetCloudAssets />} />
            <Route path="/assets/applications" element={<AssetApplications />} />
            <Route path="/assets/network" element={<AssetNetworkDevices />} />
            <Route path="/assets/threats" element={<AssetThreats />} />
            <Route path="/assets/poams" element={<AssetPOAMs />} />
            <Route path="/assets/ai-context" element={<AssetAIContext />} />
            <Route path="/quality" element={<QualityIntelligence />} />
            <Route path="/quality/test-management" element={<TestManagement />} />
            <Route path="/quality/requirements" element={<RequirementsTraceability />} />
            <Route path="/quality/risk-analysis" element={<RiskAnalysisFMEA />} />
            <Route path="/quality/capa" element={<CAPAManagement />} />
            <Route path="/team" element={<TeamManagement />} />
            <Route path="/team/members" element={<TeamMembers />} />
            <Route path="/team/roles" element={<TeamRoles />} />
            <Route path="/team/tasks" element={<TeamTasks />} />
            <Route path="/risks" element={<RisksLibrary />} />
            <Route path="/risks/register" element={<RiskRegister />} />
            <Route path="/risks/privacy-assessment" element={<PrivacyRiskAssessment />} />
            <Route path="/risks/poam-risks" element={<POAMRisks />} />
            <Route path="/risks/audit-risks" element={<AuditRisks />} />
            <Route path="/copilot" element={<AICopilot />} />
            <Route path="/legal-insurance" element={<LegalInsurance />} />
            <Route path="/audits/browse" element={<AuditBrowse />} />
            <Route path="/audits/create" element={<AuditCreate />} />
            <Route path="/audits/create/:type" element={<AuditCreate />} />
            <Route path="/audits/:id" element={<AuditDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
