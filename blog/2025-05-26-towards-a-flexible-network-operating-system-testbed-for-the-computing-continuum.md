---
slug: towards-a-flexible-network-operating-system-testbed-for-the-computing-continuum
title: Towards a flexible Network Operating System Testbed for the Computing Continuum
authors:
  julien
tags: [publication]
---

<h1>Towards a flexible Network Operating System Testbed for the
Computing Continuum</h1>
<p>In recent years, emerging computing paradigms have paved the way for
the development of the Computing Continuum, a concept that enables
applications to efficiently allocate geo-distributed resources across
the network. Despite its potential, fully realizing the Computing
Continuum remains a challenge due to the lack of suitable research
infrastructures that support experimentation at scale.</p>
<p>To address this gap, we propose a conceptual testbed designed to
enhance the replicability, scalability, and robustness of Computing
Continuum and network operating system experiments. Our testbed provides
a high degree of flexibility by allowing experimenters to modify the
operating systems of network equipment and dynamically reconfigure
network topologies. To illustrate its versatility, we define three
distinct usage scenarios, ranging from multi-operator environments to
internal network architectures within telecommunication providers, all
of which can be deployed on the proposed network topology. Additionally,
this article explores solutions for virtual topology management,
operating system deployment, and service orchestration.</p>

<!-- truncate -->

<h1>Introduction</h1>
<p>Over the years, testbeds have evolved to fulfil more and more
scientific experiment needs. Some are evolving towards specific demands
such as Software Defined Networking, High Performance Computing, Big
Data, Artificial Intelligence, Cognitive Radio Networks, among others.
While others tend to be more generic, like for testing one or more
entire computing tiers including Cloud, Fog, Mist, Edge and
Extreme-Edge. Thus, the features regarding modern testbeds are rather
scattered, often leading to problem like the testbed being too specific
or too generic for certain experiments.</p>
<p>Following scientific progress, solutions of merging all the computing
tiers are appearing like the so-called “Computing Continuum”. The
Computing Continuum refers to a distributed computing model allowing
end-to-end resource orchestration that considers computation, storage
and network for applications executed across the Edge, Fog, and Cloud
computing tiers <span class="citation"
data-cites="dustdarDistributedComputingContinuum2023a iorioComputingBordersWay2023">(Dustdar,
Pujol, and Donta 2023; Iorio et al. 2023)</span>. This paradigm ensures
communication and open availability between geographically distributed
computing resources <span class="citation"
data-cites="marinoComputingContinuumAlready2023">(Marino and Risso
2023)</span>. The Computing Continuum often manifests in large scale
distributed applications that involve most of the computing tiers, such
as an Internet Service Provider or a video service.</p>
<p>When experimenting with the Computing Continuum in a scientific
context, one or more large-scale testbeds are often needed. As the
continuum may implement any computing tier from Extreme-Edge to Cloud,
the testbed network topology ought to be flexible and highly
reconfigurable. Regarding certain edge-cases, the likelihood of the
network topology necessitating to shrink or expand over time may be
high, thus requiring both vertical and horizontal scalability. Following
the likely evolving network topology needs, highly heterogeneous
equipments are needed in order to fulfil most demands. To attain this
level of flexibility, experimenters must have the ability to change,
modify, and reconfigure the operating systems of most testbed
components, including routers and switches. Although many Network
Operating Systems (NOS) have emerged, the capability to dynamically
replace the bare-metal operating system of network equipment remains
scarce.</p>
<p>This article thus presents the following contributions:</p>
<ul>
<li><p>Three Computing Continuum usage scenarios, detailed in <a
href="#usage_scenarios" class="ref">[usage_scenarios]</a>.</p></li>
<li><p>A comprehensive review of related work on network operating
systems, research infrastructures, and network topologies in <a
href="#related_work" class="ref">[related_work]</a>.</p></li>
<li><p>A testbed designed for Edge-to-Cloud experiments, including the
implementation of a Computing Continuum. It features: A physical network
topology described in <a href="#physical_topology"
class="ref">[physical_topology]</a> ; Dynamic reconfiguration of the
virtual network topology with tooling proposition and examples,
discussed in <a href="#topology_tools" class="ref">[topology_tools]</a>
; The ability to replace the operating systems of network equipment,
with suggested deployment solutions in <a
href="#operating_system_deployment"
class="ref">[operating_system_deployment]</a> ; Service orchestration
across the testbed, as outlined in <a href="#service_orchestration"
class="ref">[service_orchestration]</a>.</p></li>
</ul>
<h1 id="usage_scenarios">Usage scenarios</h1>
<p>To assess the feasibility and applicability of network equipment
operating systems in the edge-to-cloud continuum, we propose three usage
scenarios that represent challenges and opportunities in contemporary
networking environments.</p>
<h2>Multi-operator</h2>
<p>This scenario explores the inter-connectivity between Local Area
Networks (LANs), Metropolitan Area Networks (MANs), and Wide Area
Networks (WANs) managed by multiple operators. Such environments are
inherently complex due to differing administrative policies, protocols,
and operational objectives.</p>
<p>Key elements of this scenario include the implementation and testing
of inter-domain routing protocols, such as the Border Gateway Protocol
(BGP). BGP is critical for maintaining global internet connectivity by
enabling the exchange of routing information between autonomous systems.
Additionally, the use of Multi-Protocol Label Switching (MPLS) is
examined for its ability to enhance traffic engineering, optimize data
flows, and ensure quality of service (QoS) across interconnected
networks. By addressing these elements, this scenario aims to simulate
the challenges and solutions for achieving seamless integration and
collaboration in multi-operator settings.</p>
<h2>Internet Service Provider to Telecommunications Service
Provider</h2>
<p>The scenario aims to simulate the complexities of cross-provider
collaboration, particularly in environments where stringent requirements
for QoS and data integrity are paramount. Telemedicine, for instance,
requires real-time data transmission to ensure effective remote
diagnostics and treatment. Similarly, industrial automation relies on
synchronized communication to maintain operational efficiency. This
scenario investigates how ISPs and TSPs can align their infrastructures,
protocols, and service-level agreements (SLAs) to meet these demands
while minimizing latency and maximizing reliability.</p>
<h2>Internet Service Provider Internal Network</h2>
<p>This scenario examines the internal operations of an ISP’s network,
which must balance scalability, performance, and resilience to meet
ever-growing user demands. ISPs face unique challenges in optimizing
their internal topologies to handle high volumes of traffic while
maintaining fault tolerance and service continuity.</p>
<p>The scenario aims to emulate the intricate dynamics of ISP networks,
including internal routing, resource allocation, and failure recovery
mechanisms. A particular focus is placed on optimizing traffic flows to
prevent bottlenecks and ensure equitable distribution of bandwidth
across the network. Additionally, the scenario considers the integration
of emerging technologies to enhance network management capabilities and
enable proactive responses to potential issues. By addressing these
aspects, this scenario provides a framework for evaluating the
adaptability and robustness of ISP infrastructure in the face of
evolving demands and technological advancements.</p>
<h1 id="related_work">Related work</h1>
<p>This section describes existing testbeds, related hardware, network
operating systems and defines network topology regarding the outlined
usage scenarios.</p>
<h2 id="existing_ri">Existing infrastructures</h2>
<p>The two last decades have seen the rise of many research
infrastructures. These research infrastructures allow the conduct of
various computer science experiments. As visible from <a
href="#existing_ri_table" class="ref">[existing_ri_table]</a>, we have
listed many popular or emergent research infrastructures. They will be
compared in order to determine which one is able to host our proposed
testbed. As they are not all intended for the same usage, the computing
tiers involved may differ. For example, some may be rather specific for
telecom and wireless experiments like CorteXlab, whereas others tend to
provide a more generic network infrastructure like Grid’5000.</p>
<table>
<caption><p>Research infrastructures</p></caption>
<colgroup>
<col style={{ width: " 41%" }} />
<col style={{ width: " 24%" }} />
<col style={{ width: " 17%" }} />
<col style={{ width: " 17%" }} />
</colgroup>
<thead>
<tr>
<th><p><strong>Infrastructure name</strong></p></th>
<th><p><strong>Computing tier(s) involved</strong></p></th>
<th><p><strong>Launch year</strong></p></th>
<th><p><strong>Current status</strong></p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>SLICES-RI <span class="citation"
data-cites="fdidaSLICESScientificInstrument2022">(Fdida et al.
2022)</span></p></td>
<td><p>Edge-to-Cloud</p></td>
<td><p>2022</p></td>
<td><p>Partially active</p></td>
</tr>
<tr>
<td><p>EdgeNet <a href="#fn1" class="footnote-ref" id="fnref1"
role="doc-noteref"><sup>1</sup></a> <span id="slices_merge"></span><span
class="citation" data-cites="friedmanEdgeNetSystem2019">(Friedman et al.
2019)</span></p></td>
<td><p>Edge-to-Cloud</p></td>
<td><p>2019</p></td>
<td><p>Active</p></td>
</tr>
<tr>
<td><p>Emulab <span class="citation"
data-cites="white_integrated_2003">(White et al. 2003)</span></p></td>
<td><p>Cloud/Edge</p></td>
<td><p>2002</p></td>
<td><p>Active</p></td>
</tr>
<tr>
<td><p>Chameleon Cloud <span class="citation"
data-cites="mambrettiNextGenerationClouds2015">(Mambretti, Chen, and Yeh
2015)</span></p></td>
<td><p>Cloud</p></td>
<td><p>2015</p></td>
<td><p>Active</p></td>
</tr>
<tr>
<td><p>Grid’5000 <a href="#fn1" class="footnote-ref" id="fnref1"
role="doc-noteref"><sup>1</sup></a><span class="citation"
data-cites="slices_merge bolzeGrid5000LargeScale2006"> (Bolze et al. 2006)</span></p></td>
<td><p>Cloud</p></td>
<td><p>2006</p></td>
<td><p>Active</p></td>
</tr>
<tr>
<td><p>FogGuru <span class="citation"
data-cites="FogGuruProjectTraining">(<span>“<span>FogGuru</span> Project
– <span>Training</span> the <span>Next Generation</span> of
<span>European Fog Computing Experts</span>,”</span>
n.d.)</span></p></td>
<td><p>Fog</p></td>
<td><p>2020</p></td>
<td><p>No news since 2023</p></td>
</tr>
<tr>
<td><p>YOUPI <a href="#fn1" class="footnote-ref" id="fnref1"
role="doc-noteref"><sup>1</sup></a><span class="citation"
data-cites="slices_merge fredericlemouelYOUPIFeedbacksOngoing"> (Frédéric Le Mouël, n.d.)</span></p></td>
<td><p>Fog/Edge</p></td>
<td><p>2019</p></td>
<td><p>Active</p></td>
</tr>
<tr>
<td><p>CorteXlab <a href="#fn1" class="footnote-ref" id="fnref1"
role="doc-noteref"><sup>1</sup></a><span class="citation"
data-cites="slices_merge massouriCorteXlabOpenFPGAbased2014"> (Massouri et al. 2014)</span></p></td>
<td><p>Edge</p></td>
<td><p>2014</p></td>
<td><p>Active</p></td>
</tr>
</tbody>
</table>
<p><span id="existing_ri_table"></span></p>
<p>SLICES-RI is an ambitious European project, that is an ESFRI project
since 2021. It aims to reassemble major research infrastructure across
Europe.</p>
<p>The EdgeNet testbed relies on Kubernetes for its infrastructure. As
such, it only allows experimenters to deploy containers: while this
allows a good variety of Linux OS to be deployed, it does not give
access to the bare-metal hardware, and no NOS images are available.</p>
<p>In the Emulab testbed, users are not allowed to modify the bare-metal
network operating systems of routers and switches. However, they can
change and reorganize the virtual network topology using Emulab’s
topology description tools.</p>
<p>Grid’5000 grants experimenters the ability to use and modify any OS
on heterogeneous physical machines, thanks to Kadeploy, its OS
provisioning service. Kadeploy gives full control on the bare-metal
installations of clusters of machines, up to actions requiring access to
serial consoles. A work is in progress to add NOS compatibility,
allowing to automatically provision the OS of a cluster of white box
switches. The project also includes full-mesh connectivity between
8 Tofino white box switches on the Strasbourg site, allowing the
experimenter to build any virtual network topology <span
class="citation" data-cites="Grid5000SiteStrasbourg">(<span>“Grid’5000
Site of <span>Strasbourg</span> and <span>Toulouse</span>”</span>
n.d.)</span>.</p>
<p>Chameleon Cloud offers bare-metal access to physical machines like
Grid’5000, but provides a limited list of OSs to use: no NOS is part of
it. Experimenters can create isolated networks from their WebUI.</p>
<p>In between Cloud and Edge computing, FogGuru runs on Raspberry Pis
that are not intended to act as network equipments. In addition, like
EdgeNet, FogGuru uses Kubernetes, thus the images are not running
bare-metal.</p>
<p>Like Grid’5000, YOUPI is very permissive by granting full permissions
for experimenters to modify the machines. Therefore, allowing to change
for any Linux-based OS, including most NOSs. Along 2025, the platform
may evolve toward a dynamically reconfigurable network for
experimenters.</p>
<p>On the edge computing side, CorteXlab is exclusively oriented toward
wireless communication and does not offer the possibility to the
experimenter to modify the network virtual topology too. Also, since the
machines use Docker, the images put on are not running bare-metal.</p>
<table>
<caption><p>Existing research infrastructures abilities</p></caption>
<colgroup>
<col style={{ width: " 20%" }} />
<col style={{ width: " 40%" }} />
<col style={{ width: " 40%" }} />
</colgroup>
<thead>
<tr>
<th><p><strong>Infrastructure name</strong></p></th>
<th><p><strong>Ability to modify network operating systems
bare-metal</strong></p></th>
<th><p><strong>Ability to change and reorganize the virtual network
topology</strong></p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>EdgeNet</p></td>
<td><p>No NOS and not bare-metal <a href="#fn2" class="footnote-ref"
id="fnref2" role="doc-noteref"><sup>2</sup></a> <span
id="k8s_image"></span></p></td>
<td><p>No</p></td>
</tr>
<tr>
<td><p>Emulab</p></td>
<td><p>No NOS images available</p></td>
<td><p>Yes</p></td>
</tr>
<tr>
<td><p>Chameleon Cloud</p></td>
<td><p>No NOS images available</p></td>
<td><p>Yes</p></td>
</tr>
<tr>
<td><p>Grid’5000</p></td>
<td><p>WIP on the Strasbourg site</p></td>
<td><p>Yes</p></td>
</tr>
<tr>
<td><p>FogGuru</p></td>
<td><p>No NOS and not bare-metal <span class="citation"
data-cites="k8s_image">(<strong>k8s_image?</strong>)</span></p></td>
<td><p>No</p></td>
</tr>
<tr>
<td><p>YOUPI</p></td>
<td><p>Yes</p></td>
<td><p>Planned along 2025</p></td>
</tr>
<tr>
<td><p>CorteXlab</p></td>
<td><p>No NOS and not bare-metal <span class="citation"
data-cites="k8s_image">(<strong>k8s_image?</strong>)</span></p></td>
<td><p>Wireless network only</p></td>
</tr>
</tbody>
</table>
<p><span id="existing_ri_compatibility_table"></span></p>
<p>As summarized within <a href="#existing_ri_compatibility_table"
class="ref">[existing_ri_compatibility_table]</a>, the testbed that fits
best what we are trying to achieve is Grid’5000. It allows experimenters
to change machines” operating systems with whatever they need, and
provides the KaVLAN <span class="citation"
data-cites="KaVLANGrid5000">(<span>“<span>KaVLAN</span> -
<span>Grid5000</span>”</span> n.d.)</span> services which allows
on-demand configuration of VLANs between nodes. With the upcoming
integration of white box switches in the Strasbourg site, it will allow
experimenters the capability to reconfigure the Layer 2 (L2) network
topology between a set of both experimental network switches and
servers.</p>
<p>The proposed testbed extends Grid’5000 capabilities by ensuring the
possibility to implement and test most of the Computing Continuum
scenarios as presented in <a href="#usage_scenarios"
class="ref">[usage_scenarios]</a>. Thus allowing repeatable, replicable
and reproducible experiments within the extensively documented
Grid’5000.</p>
<h2>Existing Hardware and Operating Systems</h2>
<p>In this section, we review the predominant hardware platforms and
network operating systems used in research and industry, highlighting
their relevance to Computing Continuum experimentation.</p>
<h3>Hardware</h3>
<p>Routers and switches serve distinct roles. L2 switches forward frames
via MAC addresses within a broadcast domain, while L3 switches add IP
routing with hardware acceleration (ASIC, TCAM) for fast inter-VLAN
communication. Routers manage WAN, complex policies, and protocol-based
routing (OSPF, BGP, MPLS) using CPU-driven packet processing for NAT and
VPNs. L3 switches approach router performance but focus on local,
high-throughput environments. The following hardware list is thus
divided into routers and switches (L2, L3).</p>
<p>Selecting suitable network equipment for the proposed usage scenarios
requires hardware that supports operating system flexibility,
Time-Sensitive Networking (TSN) capabilities, and Software-Defined Radio
(SDR) integration. Several white-box <a href="#fn3" class="footnote-ref"
id="fnref3" role="doc-noteref"><sup>3</sup></a> switches and routers
meet these criteria.</p>
<p>For white-box switches, models such as the <strong>Edgecore
AS7326-56X</strong> and the <strong>Dell Z9264F-ON</strong> offer
high-speed switching, and TSN support for deterministic networking. On
the router side, platforms like the <strong>UfiSpace S9500-30XS</strong>
and <strong>Nokia 7220 IXR-D2</strong> provide open networking
capabilities, allowing the deployment of customizable operating systems
suited for advanced research.</p>
<h3>Operating System</h3>
<p>A wide variety of network operating systems are available: <a
href="#nos_list" class="ref">[nos_list]</a> lists the most popular
ones.</p>
<table>
<caption><p>Network Operating Systems</p></caption>
<colgroup>
<col style={{ width: " 29%" }} />
<col style={{ width: " 19%" }} />
<col style={{ width: " 23%" }} />
<col style={{ width: " 13%" }} />
<col style={{ width: " 13%" }} />
</colgroup>
<thead>
<tr>
<th><p><strong>Operating<br />
System</strong></p></th>
<th><p><strong>Vendor</strong></p></th>
<th><p><strong>ASIC vendor compatibility</strong></p></th>
<th><p><strong>Target</strong></p></th>
<th><p><strong>License</strong></p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>OpenWrt</p></td>
<td><p>OpenWrt Project</p></td>
<td><p>Many</p></td>
<td><p>Router, Switch</p></td>
<td><p>Free, GPL-2.0</p></td>
</tr>
<tr>
<td><p>VyOS</p></td>
<td><p>VyOS Networks</p></td>
<td><p>Many</p></td>
<td><p>Router</p></td>
<td><p>Free, GPL-2.0</p></td>
</tr>
<tr>
<td><p>SONiC OS</p></td>
<td><p>Microsoft, SONiC Foundation</p></td>
<td><p>Many</p></td>
<td><p>Router, Switch</p></td>
<td><p>Free, GPL-2.0</p></td>
</tr>
<tr>
<td><p>BSDRP</p></td>
<td><p>BSD Router Project</p></td>
<td><p>No</p></td>
<td><p>Router</p></td>
<td><p>Free, BSD-2-Clause</p></td>
</tr>
<tr>
<td><p>AlliedWare Plus</p></td>
<td><p>Allied Telesis</p></td>
<td><p>Allied Telesis only</p></td>
<td><p>Router, Switch</p></td>
<td><p>Paying license</p></td>
</tr>
<tr>
<td><p>Router OS</p></td>
<td><p>MikroTik</p></td>
<td><p>Many</p></td>
<td><p>Router</p></td>
<td><p>Paying license</p></td>
</tr>
<tr>
<td><p>SwOS</p></td>
<td><p>MikroTik</p></td>
<td><p>MikroTik only</p></td>
<td><p>Switch</p></td>
<td><p>Paying license</p></td>
</tr>
<tr>
<td><p>OS10</p></td>
<td><p>DELL</p></td>
<td><p>DELL only</p></td>
<td><p>Switch</p></td>
<td><p>Paying license</p></td>
</tr>
<tr>
<td><p>DNOS9<br />
(formerly FTOS)</p></td>
<td><p>DELL</p></td>
<td><p>DELL only</p></td>
<td><p>Switch</p></td>
<td><p>Paying license</p></td>
</tr>
<tr>
<td><p>ExtremeXOS<br />
(Switch Engine)</p></td>
<td><p>Extreme Networks</p></td>
<td><p>Extreme Networks only</p></td>
<td><p>Switch</p></td>
<td><p>Paying license</p></td>
</tr>
<tr>
<td><p>EOS</p></td>
<td><p>Arista</p></td>
<td><p>Arista only</p></td>
<td><p>Switch</p></td>
<td><p>Paying license</p></td>
</tr>
<tr>
<td><p>PicOS</p></td>
<td><p>Pica8 Software Inc.</p></td>
<td><p>Many</p></td>
<td><p>Switch</p></td>
<td><p>Paying license</p></td>
</tr>
<tr>
<td><p>Cumulus Linux</p></td>
<td><p>Cumulus Networks, NVIDIA</p></td>
<td><p>Many</p></td>
<td><p>Switch</p></td>
<td><p>Paying license</p></td>
</tr>
<tr>
<td><p>Junos OS</p></td>
<td><p>Juniper Networks</p></td>
<td><p>Juniper Networks only</p></td>
<td><p>Router, Switch</p></td>
<td><p>Paying license</p></td>
</tr>
<tr>
<td><p>iOS XE</p></td>
<td><p>CISCO</p></td>
<td><p>CISCO only</p></td>
<td><p>Router, Switch</p></td>
<td><p>Paying license</p></td>
</tr>
</tbody>
</table>
<p><span id="nos_list"></span></p>
<p>A key factor in addressing the problem we aim to solve is the ability
to modify the operating system of network equipment. Consequently,
hardware compatibility plays a crucial role. The proposed testbed should
support a broad range of architectures, including both standard
x86-based platforms and white box switches, while maintaining
compatibility with ASIC-based hardware. The more an operating system
supports diverse ASIC vendors, the more versatile and valuable it
becomes for experimentation. This flexibility ensures that the testbed
can accommodate real-world deployment scenarios where proprietary ASICs
and merchant silicon coexist. Additionally, the choice of operating
system—whether proprietary or open-source—remains at the discretion of
the experimenter, allowing for a variety of research and industry use
cases.</p>
<h2 id="existing_network_architectures">Existing network
architectures</h2>
<p>This section focuses on the network architectures linked to the
mentioned usage scenarios in <a href="#usage_scenarios"
class="ref">[usage_scenarios]</a>. Each emphasizes realizable
experiments within the proposed testbed.</p>
<p>Regarding the first usage scenario, multi-operator communication,
end-to-end experimenter communication that traverses the internet must
be achievable. The average packet takes about 4.06 Autonomous Systems
(AS) path length <a href="#fn4" class="footnote-ref" id="fnref4"
role="doc-noteref"><sup>4</sup></a> to go through the internet <span
class="citation" data-cites="wangInferringAveragePath2016">(Wang et al.
2016)</span>. In this work, we are going to focus on a minimal AS
network topology that involves four meshed routers. Consequently,
allowing to reproduce the average route to traverse the internet. <a
href="#scenario_topology_1" class="ref">[scenario_topology_1]</a> <span
class="citation" data-cites="sebosIntegratedIPOptical2004">(Sebos et
al., n.d.)</span> illustrates a typical ISP network topology.</p>
<figure>
<p>![](./images/scenario_1.png)</p>
<figcaption><p>Typical ISP Network Topology</p></figcaption>
</figure>
<p><span id="scenario_topology_1"></span></p>
<p>The second usage scenario focuses on ISP to TSP communication, thus
allowing end-to-end experimenter communication. <a
href="#scenario_topology_2" class="ref">[scenario_topology_2]</a> from
<span class="citation"
data-cites="AssemblingVoLTECDRs">(<span>“Assembling <span>VoLTE
CDRs</span> Based on <span>Network Monitoring</span> –
<span>Challenges</span> with <span>Fragmented Information</span>”</span>
n.d.)</span> emphases the need of telecommunication hardware by
connecting internet to a VoLTE network architecture. This can be
achievable by the use of SDR cards or by interconnecting others research
infrastructures such as CorteXlab or IoT-LAB <span class="citation"
data-cites="adjihFITIoTLABLarge2015a">(Adjih et al. 2015)</span>.</p>
<figure>
<p>![](./images/scenario_2.png)</p>
<figcaption><p>Core network architecture serving Voice over LTE -
including 2G, 3G, 4G and IMS components</p></figcaption>
</figure>
<p><span id="scenario_topology_2"></span></p>
<p>The third usage scenario, focusing on an internet service provider’s
internal network, prioritizes high performance, scalability, and
robustness. This environment enables experimentation with custom
communication protocols, fully distributed or fluid computing
architectures, and TSN, among other advanced networking paradigms, to
optimize efficiency and reliability. The network topology remains
flexible, allowing for adaptation based on specific research and
operational requirements.</p>
<p>A promising direction for future work is the integration of
Deep-Generative Graphs for the Internet (DGGI) <span class="citation"
data-cites="dadautoDatadrivenIntraAutonomousSystems2024">(Dadauto,
Fonseca, and Torres 2024)</span>, to generate realistic network
topologies for our usage scenarios. Traditional topology generators
often fail to capture key structural properties such as betweenness,
clustering, and assortativity, which are crucial for accurately modeling
intra-AS networks. By leveraging DGGI, we could create synthetic
topologies that closely resemble real-world networks, enhancing the
validity of our testbed experiments. This approach would enable more
data-driven topology selection, improving the evaluation of routing
protocols, network OS behavior, and scalability under diverse
conditions.</p>
<h1>Conceptual Framework</h1>
<p>Designing an effective testbed for Computing Continuum experiments
requires a scalable and sustainable framework that supports flexibility,
reproducibility, and long-term adaptability. This section outlines the
key design principles guiding our approach, ensuring that the testbed
can accommodate diverse network environments and evolving research
needs. Additionally, we propose a structured workflow for
experimentation, detailing how network operating systems can be
integrated and deployed within the testbed to facilitate rigorous and
repeatable testing.</p>
<h2 id="physical_topology">Physical topology</h2>
<p>The foundation of our testbed’s physical topology is inspired by the
Grid’5000 project in the Strasbourg site to support core-network
experiments. However, certain limitations must be addressed to better
support telecommunications-oriented experiments and custom communication
protocols as seen with the usage scenarios.</p>
<figure>
<p>![](./images/G5k-strasbourg-network-ex3-1.png)</p>
<figcaption><p>Grid’5000 Strasbourg site network topology <span
class="citation" data-cites="Grid5000SiteStrasbourg">(<span>“Grid’5000
Site of <span>Strasbourg</span> and <span>Toulouse</span>”</span>
n.d.)</span></p></figcaption>
</figure>
<p><span id="strasbourg_topology"></span></p>
<p>The network topology of the Grid’5000 Strasbourg site visible in <a
href="#strasbourg_topology" class="ref">[strasbourg_topology]</a> <span
class="citation" data-cites="Grid5000SiteStrasbourg">(<span>“Grid’5000
Site of <span>Strasbourg</span> and <span>Toulouse</span>”</span>
n.d.)</span> consists of a core routing infrastructure interconnected to
other Grid’5000 sites, providing high-speed connectivity for distributed
computing experiments. The compute and networking experimental resources
are organized into distinct groups, notably the <code>engelbourg</code>
nodes, which consist of programmable Tofino-based white box switches,
and the <code>fleckenstein</code> nodes, which are standard HPE servers
with several network interfaces. A dedicated mesh network fabric
interconnects these resources, facilitating flexible networking
configurations thanks to L2 VLAN switching. VLAN segmentation is
extensively used, with multiple VLANs ensuring logical isolation and
controlled data flow across the infrastructure.</p>
<p>This design allows many different virtual topologies to be setup by
the experimenter, thanks to the mesh network fabric. However, it comes
at a cost: all network traffic between the resources must go through
this L2 fabric, preventing the use of advanced or experimental layer-2
protocols. Examples of advanced L2 usage include VLAN stacking
(802.1ad), custom QoS policies, or using the Precision Time Protocol
(PTP). Another constraint is the lack of end-device diversity,
particularly for telecommunications research, where real-world end-user
behavior and heterogeneous device interactions play a crucial role.</p>
<p>To overcome these challenges, we propose direct interconnection of
experimenter-controlled routers within the testbed, reducing dependency
on infrastructure switches and enabling the formation of minimal AS-like
virtual networks. This design allows for greater control over packet
forwarding, facilitates custom protocol deployment, and enhances
scalability for multi-domain networking experiments. However, this
constrains our testbed to single-user experiments: as soon as an
experimenter has full control over one network device (e.g. a L2/L3
switch in <a href="#network_architecture"
class="ref">[network_architecture]</a>), no other experimenter can
safely use the other devices because their connectivity directly depend
on each other.</p>
<p>A second key enhancement involves integrating Software-Defined Radio
(SDR) capabilities by equipping the testbed with PCIe SDR cards or
establishing interconnections with external research infrastructures
like CorteXlab. This addition would enable the evaluation of
wireless-networking scenarios, edge-to-cloud interactions, and hybrid
wired-wireless architectures, further expanding the scope of possible
experiments.</p>
<figure>
<p>![](./images/proposed_network_architecture.png)</p>
<figcaption><p>Proposed network architecture</p></figcaption>
</figure>
<p><span id="network_architecture"></span></p>
<p>The presented network topology in <a href="#network_architecture"
class="ref">[network_architecture]</a> is structured around a
multi-router, multi-switch design, facilitating flexible and scalable
networking experiments. It consists of 16 routers, which are categorized
into four distinct subnetworks (minimalist ASs), each represented by
different colors (red, green, blue, and orange) for readability. These
subnetworks are interconnected via four L2/L3 switches, forming a
hierarchical structure that ensures high connectivity while maintaining
isolation between different experimental setups.</p>
<p>The Grid’5000 network (Purple) and the CorteXlab network (Teal) as an
example are integrated within the testbed, allowing for external
connectivity and interaction with broader research infrastructures. The
routers within each subnetwork are directly linked to their respective
L2/L3 switches, which are in turn interconnected to enable communication
across different domains. Additionally, each core switch connects to a
pool of servers, which serve as end-hosts for various networking
experiments. To ensure the usage of network topologies tools like
KaVLAN, as described in <a href="#topology_tools"
class="ref">[topology_tools]</a>, the core switches are P4 compatible.
It is up to the experimenter to maintain P4 compatibility within the
switches operating systems to benefit from the ease of network
configuration offered by tools like KaVLAN. Furthermore, each device is
connected to an administration network (not depicted in the diagram),
which facilitates operating system changes and basic administrative
tasks, also ensuring that no connection is lost with incorrect network
configurations.</p>
<p>The topology enables routing experiments by supporting direct
router-to-router connections, allowing the implementation of AS-like
environments. The integration of multiple research infrastructures
ensures that the testbed is suitable for testing custom communication
protocols, software-defined networking (SDN) approaches, and
time-sensitive networking scenarios. This design avoids dependence on a
central switch, providing flexibility in defining network policies and
improving resilience against potential failures.</p>
<h2 id="topology_tools">Virtual topology tools</h2>
<p>Conceptually, setting up a virtual topology for an experimentation
requires three phases: 1) <strong>Defining the desired virtual
topology</strong>: The experimenter specifies the intended network
topology using a sufficiently expressive language to accommodate a wide
range of experimental setups. 2) <strong>Mapping the virtual topology
onto the physical infrastructure</strong>: This process can be handled
either by the testbed itself—leveraging tools such as
<code>assign</code> from Emulab—or by the experimenter, who selects the
most suitable physical resources. 3) <strong>Configuring physical
resources to establish the topology</strong>: The testbed automates this
step using internal tools, which allocate and configure physical nodes
while deploying VLANs to establish the necessary network links.</p>
<h3>Virtual topology description</h3>
<p>The experimenter must be able to describe a target topology as a
graph. More precisely, a bipartite graph offers a general
representation: the first class of graph nodes represents reconfigurable
<em>resources</em> (servers or network devices), while the second class
of graph nodes represents <em>networks</em>. A link in the graph
represents the attachment of a <em>resource</em> (through one of its
network interface cards) to a <em>network</em>. All <em>resources</em>
that are attached to the same <em>network</em> can communicate with each
other. <a href="#example-topology" class="ref">[example-topology]</a>
gives an example topology with three user-controlled <em>resources</em>:
two servers and one switch that interconnects them. This topology needs
two <em>networks</em> to represent the connectivity between the
<em>resources</em>.</p>
<figure>
<p>![](./images/topology-example.png)</p>
<figcaption><p>Example virtual topology represented as a bipartite
graph: user-controllable resources are shown in green, while networks
are shown in red.</p></figcaption>
</figure>
<p><span id="example-topology"></span></p>
<p>A resource can be described through constraints: at least 10 CPU
cores, at least 2 Ethernet 10Gbit/s network interfaces… Alternatively,
the resource description can directly refer to specific hardware
resources from a testbed (e.g. using a cluster name).</p>
<p>In the graph, a node of class <em>network</em> can represent many
different kinds of real networks. The simplest network is a L1
point-to-point connection, i.e. a simple cable between two devices. In
that case, only two <em>resources</em> can attach to this
<em>network</em> in the graph. More complex networks include L2 networks
(e.g. provided by a VLAN by the testbed), or the concept of “LAN” from
Emulab, defined as “a clique of nodes [resources] with full bisection
bandwidth” <span class="citation"
data-cites="hermenier_how_2012">(Hermenier and Robert 2012)</span>.</p>
<p>The next step is to be able to describe this graph programmatically.
Several existing network testbeds provide a way to describe a topology
in a high-level language such as Python. We implement the example
topology from <a href="#example-topology"
class="ref">[example-topology]</a> in two testbeds: Emulab and
Grid’5000. For the sake of brevity, we only focus on the topology aspect
and omit other configuration options (e.g. which operating system should
be deployed on which resource).</p>
<p><a href="#topo-example-emulab" class="ref">[topo-example-emulab]</a>
example is written in Python using <code>geni-lib</code>, simplified
from the Emulab documentation <span class="citation"
data-cites="eric_eide_emulab_nodate">(Eric Eide et al. n.d.)</span>,
with two servers and a <strong>Dell S4048</strong> network switch:</p>
<figure>
<pre class="py"><code>
# Add a raw PC to the request and add an interface
  node1 = request.RawPC(&quot;node1&quot;)
  iface1 = node1.addInterface()

# Add the Switch and give it some interfaces
mysw = request.Switch(&quot;mysw&quot;);
mysw.hardware_type = &quot;dell-s4048&quot;
swiface1 = mysw.addInterface()
swiface2 = mysw.addInterface()
node2 = request.RawPC(&quot;node2&quot;)
iface2 = node2.addInterface()

# Add L1 link from node1 to mysw
link1 = request.L1Link(&quot;link1&quot;)
link1.addInterface(iface1)
link1.addInterface(swiface1)

link2 = request.L1Link(&quot;link2&quot;)
link2.addInterface(iface2)
link2.addInterface(swiface2)
</code></pre>
<figcaption><p>Example topology from <a href="#example-topology"
class="ref">[example-topology]</a> defined in Python with
<code>geni-lib</code>, targeted at Emulab</p></figcaption>
</figure>
<p><span id="topo-example-emulab"></span></p>
<p><a href="#topo-example-enoslib"
class="ref">[topo-example-enoslib]</a> is using EnOSlib <span
class="citation" data-cites="cherrueau_enoslib_2022">(Cherrueau et al.
2022)</span> on Grid’5000, with <code>fleckenstein</code> referring to
classical x86 servers and <code>engelbourg</code> referring to a
<strong>Edge-core Wedge100BF</strong> network switch:</p>
<figure>
<pre class="py"><code>
net_conf = dict(type=&quot;kavlan&quot;, site=&quot;strasbourg&quot;)
  net1 = en.G5kNetworkConf(**net_conf)
  net2 = en.G5kNetworkConf(**net_conf)

conf = (
en.G5kConf()
.add_network_conf(net1)
.add_network_conf(net2)
.add_machine(
cluster=&quot;fleckenstein&quot;,
nodes=1,
secondary_networks=[net1]
)
.add_machine(
cluster=&quot;fleckenstein&quot;,
nodes=1,
secondary_networks=[net2]
)
.add_machine(
cluster=&quot;engelbourg&quot;,
nodes=1,
secondary_networks=[net1, net2]
)
)

provider = en.G5k(conf)
provider.init()
</code></pre>
<figcaption><p>Example topology from <a href="#example-topology"
class="ref">[example-topology]</a> defined in Python with EnOSlib <span
class="citation" data-cites="cherrueau_enoslib_2022">(Cherrueau et al.
2022)</span>, targeted at Grid’5000</p></figcaption>
</figure>
<p><span id="topo-example-enoslib"></span></p>
<p>Other techniques can be used to describe the topology of an
experiment: Heat templates on Chameleon Cloud <span class="citation"
data-cites="chameleon_cloud_complex_nodate">(Chameleon Cloud
n.d.)</span>, and the Fablib Python library <span class="citation"
data-cites="paul_ruth_fabric_nodate">(Paul Ruth and Komal Thareja
n.d.)</span> on the FABRIC testbed <span class="citation"
data-cites="baldin_fabric_2019">(Baldin et al. 2019)</span>.</p>
<p>While these approaches have differences, they all adopt a declarative
structure to describe the resources, the networks, and their
connections. We believe that a declarative approach has good properties:
it allows to validate correctness properties on the whole topology
before actually allocating resources on the testbed, and it is also a
key requirement to be able to choose the appropriate physical resources
that fit the desired topology.</p>
<h3>Configuring physical resources to setup the topology</h3>
<p>Setting up the virtual topology usually boils down to two categories
of actions: <strong>1) allocate and configure physical nodes</strong>,
e.g. reboot them, deploy an OS on them, configure their network
interfaces, and allow the SSH key of the experimenter; <strong>2)
allocate and deploy the desired networks and network
connections</strong>, e.g. by deploying VLANs on the infrastructure and
configuring the physical ports on which the nodes are connected. We only
focus on this second category.</p>
<p>Existing testbeds use dedicated tools to reconfigure the network
dynamically: KaVLAN on Grid’5000; <code>snmpit</code> <span
class="citation" data-cites="emulab_tbsetupsnmpit_2024">(Emulab
2024)</span> on Emulab; Neutron and Networking-Generic-Switch on
Chameleon Cloud; and a Cisco Network Services Orchestration (NSO)
controller on FABRIC. These reconfiguration tools all expose a
high-level interface (often called the northbound API) through which
network configuration requests can be made. Then, each tool exploits a
low-level interface (often called the southbound API) to communicate
with the actual network devices and update their configuration. The
southbound API can either use SNMP, SSH, or the NETCONF protocol with
appropriate YANG models.</p>
<p>Another interesting aspect of YANG models is the possibility to use
them as intermediate representation of network topologies. Such a
representation has the potential to be agnostic to the testbed and to
the specific network hardware to be configured. A potentially useful
model to achieve this is the YANG Data Model for Network Topologies from
RFC 8345. However, to our knowledge, this intermediate representation
approach has not been explored in current testbeds: YANG and NETCONF are
only used as the low-level southbound API by the Cisco NSO controller on
FABRIC, likely using Cisco-specific YANG models.</p>
<h2 id="operating_system_deployment">Network Operating System
deployment</h2>
<p>Changing the network operating system by the network while using this
same network can be tough. It can be compared to sawing off the branch
you are sitting on. Fortunately, innovative solutions have been created
such as Open Network Install Environment (ONIE) <span class="citation"
data-cites="OpenNetworkInstall">(<span>“Open <span>Network Install
Environment</span> — <span>Open Network Install Environment</span>
Documentation”</span> n.d.)</span>, that inherit from ONL <span
class="citation" data-cites="ONLHome">(<span>“<span>ONL
Home</span>,”</span> n.d.)</span>. ONIE is a minimal operating system
that its only functionality is to connect to a network and waiting to
receive the image to install. Once an image is installed, the primary
boot partition is automatically set to the installed OS one. If the
operating system gets uninstalled, then the primary boot partition is
set back to ONIE’s. One of the two limitations regarding ONIE is that it
has to come pre-installed with non-white box or bare metal switches. The
other main limitation is that images that ONIE can install have to be
tweaked before proceeding, thus limiting the available options .</p>
<p>Various other operating system deployment tools are available,
including Kadeploy, which is actively being developed within the
Grid’5000 testbed. Kadeploy is a scalable and efficient deployment
system designed to facilitate the installation of operating systems
across multiple nodes simultaneously. It provides experimenters with the
ability to customize post-installation configurations, ensuring a
tailored deployment process. While initially developed for
general-purpose computing clusters, its flexibility allows for
adaptation to network environments, including white-box switches and
ONIE-compatible images. However, its integration with network operating
systems remains a work in progress, requiring further development to
fully support the specific needs of network infrastructure
experimentation.</p>
<h2 id="service_orchestration">Service Orchestration</h2>
<p>Service orchestration plays a crucial role in the efficient
deployment and management of experiments within our testbed. The
flexibility of our infrastructure allows experimenters to deploy
off-the-shelf orchestrators as part of their research, enabling the
evaluation of orchestration frameworks in real-world scenarios. This
capability is particularly relevant for studying performance,
scalability, and resilience aspects of different orchestration solutions
in a controlled yet realistic environment.</p>
<p>To facilitate experiment execution, we provide support for various
orchestration tools that experimenters can leverage to manage their
deployments. These tools include widely used configuration management
and automation frameworks such as Ansible, as well as more specialized
solutions like EnOSlib <span class="citation"
data-cites="cherrueau_enoslib_2022">(Cherrueau et al. 2022)</span> which
offer tailored functionalities for network and distributed system
experiments. By integrating these tools, experimenters can automate
system configuration, deploy network services, and manage complex
experimental workflows with minimal overhead. This approach ensures
reproducibility, scalability, and efficiency within the testbed.</p>
<p>Regarding the Computing Continuum, service orchestration will play a
significant role in future experiments. Kubernetes remains the most
widely used solution for simulating or emulating a continuum-like
computing model, as few alternatives have emerged over time. However, in
line with the European initiative Future European Platforms for the
Edge: Meta-Operating Systems—part of the Horizon Europe program—new Meta
Operating Systems (Meta OS) have started to appear. Each proposed
solution offers a unique perspective on achieving the Computing
Continuum, including NEMO <span class="citation"
data-cites="HOMENEMOMETAOS">(<span>“<span>HOME</span> - <span>NEMO
META-OS</span>,”</span> n.d.)</span>, FLUIDOS <span class="citation"
data-cites="FLUIDOS">(<span>“<span>FLUIDOS</span>,”</span> n.d.)</span>,
ICOS <span class="citation" data-cites="ProjectICOS">(<span>“Project
<span>ICOS</span>,”</span> n.d.)</span>, NebulOuS <span class="citation"
data-cites="HomeNebulOuS">(<span>“Home - <span>NebulOuS</span>,”</span>
n.d.)</span>, AerOS <span class="citation"
data-cites="AerOSProject">(<span>“<span class="nocase">aerOS</span>
Project,”</span> n.d.)</span>, and Nephele <span class="citation"
data-cites="HomeNephele">(<span>“Home <span></span>
<span>Nephele</span>,”</span> n.d.)</span>. These Meta Operating Systems
are not all intended to be deployed on the same computing tiers. For
instance, Nephele focuses exclusively on edge devices. Whereas, FLUIDOS
lays from cloud to edge.</p>
<p>The Computing Continuum experiment framework, E2Clab <span
class="citation"
data-cites="rosendoE2ClabExploringComputing2020">(Rosendo et al.
2020)</span>, built on top of EnOSlib and targeted at Grid’5000, was
introduced in 2020. Its adoption facilitates real-world testing and
benchmarking of Meta OS service orchestration. Given that both E2Clab
and our proposed testbed are based on Grid’5000, we believe they are
compatible and complementary.</p>
<h1 id="future_work">Discussion &amp; future work</h1>
<p>In this work, we introduced a conceptual testbed designed to enhance
the flexibility, scalability, and replicability of Computing Continuum
experiments. We outlined three distinct usage scenarios, each addressing
different networking challenges and research needs. Additionally, we
reviewed existing network operating systems and research
infrastructures, highlighting their limitations and compatibility with
our approach. By enabling dynamic OS replacement and adaptable network
topologies, our testbed aims to bridge the gap between theoretical
advancements and practical deployments in next-generation networking
environments. While our testbed is conceptual, we based our work on
existing research infrastructures such as Grid’5000 to envisage a
realistic implementation. Practical validation still remains an open
challenge.</p>
<p>A limitation when deploying network operating systems is the
necessity to use ONIE-compatible OS images, thus limiting the available
options and slowing down OS development process. This limitation is
peering up with the non-availability of Meta OS images for the time
being. A future work for the Meta OS research field could be to get a
step closer to NOS installation solutions such as ONIE. To follow with
service orchestration, a Computing Continuum experimentation framework
like E2Clab can be pushed onto our testbed to shape a powerful and
reliable testing workflow.</p>
<p>The most ambitious future work for Computing Continuum
experimentation at large scale is to enable interconnectivity and
compliance of various research infrastructures. Such a research
advancement merged with our testbed proposal would empower the test of
life-sized complex experiments. Finally, establishing collaborations
with industry and research initiatives will be crucial to ensuring
real-world applicability and aligning with evolving networking and
computing standards.</p>
<div id="refs" class="references csl-bib-body hanging-indent"
data-entry-spacing="0" role="list">
<div id="ref-adjihFITIoTLABLarge2015a" class="csl-entry"
role="listitem">
Adjih, Cedric, Emmanuel Baccelli, Eric Fleury, Gaetan Harter, Nathalie
Mitton, Thomas Noel, Roger Pissard-Gibollet, et al. 2015.
<span>“<span>FIT IoT-LAB</span>: <span>A</span> Large Scale Open
Experimental <span>IoT</span> Testbed.”</span> In <em>2015
<span>IEEE</span> 2nd <span>World Forum</span> on <span>Internet</span>
of <span>Things</span> (<span>WF-IoT</span>)</em>, 459–64. Milan, Italy:
IEEE. <a
href="https://doi.org/10.1109/WF-IoT.2015.7389098">https://doi.org/10.1109/WF-IoT.2015.7389098</a>.
</div>
<div id="ref-AerOSProject" class="csl-entry" role="listitem">
<span>“<span class="nocase">aerOS</span> Project.”</span> n.d. <a
href="https://aeros-project.eu/">https://aeros-project.eu/</a>.
</div>
<div id="ref-AssemblingVoLTECDRs" class="csl-entry" role="listitem">
<span>“Assembling <span>VoLTE CDRs</span> Based on <span>Network
Monitoring</span> – <span>Challenges</span> with <span>Fragmented
Information</span>.”</span> n.d. In <em><span>ResearchGate</span></em>.
Accessed January 21, 2025. <a
href="https://doi.org/10.23919/INM.2017.7987410">https://doi.org/10.23919/INM.2017.7987410</a>.
</div>
<div id="ref-baldin_fabric_2019" class="csl-entry" role="listitem">
Baldin, Ilya, Anita Nikolich, James Griffioen, Indermohan Inder S.
Monga, Kuang-Ching Wang, Tom Lehman, and Paul Ruth. 2019.
<span>“<span>FABRIC</span>: <span>A</span>
<span>National</span>-<span>Scale</span> <span>Programmable</span>
<span>Experimental</span> <span>Network</span>
<span>Infrastructure</span>.”</span> <em>IEEE Internet Computing</em> 23
(6): 38–47. <a
href="https://doi.org/10.1109/MIC.2019.2958545">https://doi.org/10.1109/MIC.2019.2958545</a>.
</div>
<div id="ref-bolzeGrid5000LargeScale2006" class="csl-entry"
role="listitem">
Bolze, Raphaël, Franck Cappello, Eddy Caron, Michel Daydé, Frédéric
Desprez, Emmanuel Jeannot, Yvon Jégou, et al. 2006. <span>“Grid’5000:
<span>A Large Scale And Highly Reconfigurable Experimental Grid
Testbed</span>.”</span> <em>The International Journal of High
Performance Computing Applications</em> 20 (4): 481–94. <a
href="https://doi.org/10.1177/1094342006070078">https://doi.org/10.1177/1094342006070078</a>.
</div>
<div id="ref-chameleon_cloud_complex_nodate" class="csl-entry"
role="listitem">
Chameleon Cloud. n.d. <span>“Complex Appliances — <span>Chameleon</span>
<span>Cloud</span> <span>Documentation</span>.”</span> Accessed February
18, 2025. <a
href="https://chameleoncloud.readthedocs.io/en/latest/technical/complex.html#heat-orchestration-templates">https://chameleoncloud.readthedocs.io/en/latest/technical/complex.html#heat-orchestration-templates</a>.
</div>
<div id="ref-cherrueau_enoslib_2022" class="csl-entry" role="listitem">
Cherrueau, Ronan-Alexandre, Marie Delavergne, Alexandre van Kempen,
Adrien Lebre, Dimitri Pertin, Javier Rojas Balderrama, Anthony Simonet,
and Matthieu Simonin. 2022. <span>“<span>EnosLib</span>: <span>A</span>
<span>Library</span> for <span>Experiment</span>-<span>Driven</span>
<span>Research</span> in <span>Distributed</span>
<span>Computing</span>.”</span> <em>IEEE Transactions on Parallel and
Distributed Systems</em> 33 (6): 1464–77. <a
href="https://doi.org/10.1109/TPDS.2021.3111159">https://doi.org/10.1109/TPDS.2021.3111159</a>.
</div>
<div id="ref-dadautoDatadrivenIntraAutonomousSystems2024"
class="csl-entry" role="listitem">
Dadauto, Caio Vinicius, Nelson Luis Saldanha da Fonseca, and Ricardo da
Silva Torres. 2024. <span>“Data-Driven <span>Intra-Autonomous Systems
Graph Generator</span>.”</span> arXiv. <a
href="https://doi.org/10.48550/arXiv.2308.05254">https://doi.org/10.48550/arXiv.2308.05254</a>.
</div>
<div id="ref-dustdarDistributedComputingContinuum2023a"
class="csl-entry" role="listitem">
Dustdar, Schahram, Victor Casamayor Pujol, and Praveen Kumar Donta.
2023. <span>“On <span>Distributed Computing Continuum
Systems</span>.”</span> <em>IEEE Transactions on Knowledge and Data
Engineering</em> 35 (4): 4092–4105. <a
href="https://doi.org/10.1109/TKDE.2022.3142856">https://doi.org/10.1109/TKDE.2022.3142856</a>.
</div>
<div id="ref-emulab_tbsetupsnmpit_2024" class="csl-entry"
role="listitem">
Emulab. 2024. <span>“Tbsetup/Snmpit · Master · Emulab / Emulab-Devel ·
<span>GitLab</span>.”</span> <em>GitLab</em>. <a
href="https://gitlab.flux.utah.edu/emulab/emulab-devel/-/tree/master/tbsetup/snmpit">https://gitlab.flux.utah.edu/emulab/emulab-devel/-/tree/master/tbsetup/snmpit</a>.
</div>
<div id="ref-eric_eide_emulab_nodate" class="csl-entry" role="listitem">
Eric Eide, Robert Ricci, Jacobus (Kobus) Van der Merwe, Leigh Stoller,
Kirk Webb, Jon Duerig, Gary Wong, Keith Downie, Mike Hibler, and David
Johnson. n.d. <span>“The <span>Emulab</span>
<span>Manual</span>.”</span> Accessed February 17, 2025. <a
href="https://docs.emulab.net/advanced-topics.html#%28part._user-controlled-switches%29">https://docs.emulab.net/advanced-topics.html#%28part._user-controlled-switches%29</a>.
</div>
<div id="ref-fdidaSLICESScientificInstrument2022" class="csl-entry"
role="listitem">
Fdida, Serge, Nikos Makris, Thanasis Korakis, Raffaele Bruno, Andrea
Passarella, Panayiotis Andreou, Bartosz Belter, et al. 2022.
<span>“<span>SLICES</span>, a Scientific Instrument for the Networking
Community.”</span> <em>Computer Communications</em> 193 (September):
189–203. <a
href="https://doi.org/10.1016/j.comcom.2022.07.019">https://doi.org/10.1016/j.comcom.2022.07.019</a>.
</div>
<div id="ref-FLUIDOS" class="csl-entry" role="listitem">
<span>“<span>FLUIDOS</span>.”</span> n.d. <a
href="https://fluidos.eu/">https://fluidos.eu/</a>.
</div>
<div id="ref-FogGuruProjectTraining" class="csl-entry" role="listitem">
<span>“<span>FogGuru</span> Project – <span>Training</span> the
<span>Next Generation</span> of <span>European Fog Computing
Experts</span>.”</span> n.d. <a
href="http://www.fogguru.eu/">http://www.fogguru.eu/</a>.
</div>
<div id="ref-fredericlemouelYOUPIFeedbacksOngoing" class="csl-entry"
role="listitem">
Frédéric Le Mouël. n.d. <span>“<span>YOUPI</span>: Feedbacks, Ongoing
and Future Works of a <span>Fog</span>/ <span>Edge Computing</span>
Platform.”</span>
</div>
<div id="ref-friedmanEdgeNetSystem2019" class="csl-entry"
role="listitem">
Friedman, Timur, Rick McGeer, Berat Can Senel, Matt Hemmings, and Glenn
Ricart. 2019. <span>“The <span>EdgeNet System</span>.”</span> In
<em>2019 <span>IEEE</span> 27th <span>International Conference</span> on
<span>Network Protocols</span> (<span>ICNP</span>)</em>, 1–2. <a
href="https://doi.org/10.1109/ICNP.2019.8888122">https://doi.org/10.1109/ICNP.2019.8888122</a>.
</div>
<div id="ref-Grid5000SiteStrasbourg" class="csl-entry" role="listitem">
<span>“Grid’5000 Site of <span>Strasbourg</span> and
<span>Toulouse</span>.”</span> n.d. Accessed February 13, 2025. <a
href="https://www.grid5000.fr/Core2EdgeNetworkXP/">https://www.grid5000.fr/Core2EdgeNetworkXP/</a>.
</div>
<div id="ref-hermenier_how_2012" class="csl-entry" role="listitem">
Hermenier, Fabien, and Ricci Robert. 2012. <span>“How <span>To</span>
<span>Build</span> a <span>Better</span> <span>Testbed</span>:
<span>Lessons</span> <span>From</span> a <span>Decade</span> of
<span>Network</span> <span>Experiments</span> on
<span>Emulab</span>.”</span> In, 1. <a
href="https://hal.science/hal-00710449">https://hal.science/hal-00710449</a>.
</div>
<div id="ref-HomeNebulOuS" class="csl-entry" role="listitem">
<span>“Home - <span>NebulOuS</span>.”</span> n.d. <a
href="https://nebulouscloud.eu/">https://nebulouscloud.eu/</a>.
</div>
<div id="ref-HOMENEMOMETAOS" class="csl-entry" role="listitem">
<span>“<span>HOME</span> - <span>NEMO META-OS</span>.”</span> n.d. <a
href="https://meta-os.eu/">https://meta-os.eu/</a>.
</div>
<div id="ref-HomeNephele" class="csl-entry" role="listitem">
<span>“Home <span></span> <span>Nephele</span>.”</span> n.d. <a
href="https://nephele-project.eu/">https://nephele-project.eu/</a>.
</div>
<div id="ref-iorioComputingBordersWay2023" class="csl-entry"
role="listitem">
Iorio, Marco, Fulvio Risso, Alex Palesandro, Leonardo Camiciotti, and
Antonio Manzalini. 2023. <span>“Computing <span>Without Borders</span>:
<span>The Way Towards Liquid Computing</span>.”</span> <em>IEEE
Transactions on Cloud Computing</em> 11 (3): 2820–38. <a
href="https://doi.org/10.1109/TCC.2022.3229163">https://doi.org/10.1109/TCC.2022.3229163</a>.
</div>
<div id="ref-KaVLANGrid5000" class="csl-entry" role="listitem">
<span>“<span>KaVLAN</span> - <span>Grid5000</span>.”</span> n.d.
Accessed January 29, 2025. <a
href="https://www.grid5000.fr/w/KaVLAN">https://www.grid5000.fr/w/KaVLAN</a>.
</div>
<div id="ref-mambrettiNextGenerationClouds2015" class="csl-entry"
role="listitem">
Mambretti, Joe, Jim Chen, and Fei Yeh. 2015. <span>“Next
<span>Generation Clouds</span>, the <span>Chameleon Cloud
Testbed</span>, and <span>Software Defined Networking</span>
(<span>SDN</span>).”</span> In <em>2015 <span>International
Conference</span> on <span>Cloud Computing Research</span> and
<span>Innovation</span> (<span>ICCCRI</span>)</em>, 73–79. Singapore,
Singapore: IEEE. <a
href="https://doi.org/10.1109/ICCCRI.2015.10">https://doi.org/10.1109/ICCCRI.2015.10</a>.
</div>
<div id="ref-marinoComputingContinuumAlready2023" class="csl-entry"
role="listitem">
Marino, Jacopo, and Fulvio Risso. 2023. <span>“Is the <span>Computing
Continuum Already Here</span>?”</span> arXiv. <a
href="https://doi.org/10.48550/arXiv.2309.09822">https://doi.org/10.48550/arXiv.2309.09822</a>.
</div>
<div id="ref-massouriCorteXlabOpenFPGAbased2014" class="csl-entry"
role="listitem">
Massouri, Abdelbassat, Leonardo Cardoso, Benjamin Guillon, Florin Hutu,
Guillaume Villemaud, Tanguy Risset, and Jean-Marie Gorce. 2014.
<span>“<span>CorteXlab</span>: <span>An</span> Open <span
class="nocase">FPGA-based</span> Facility for Testing <span>SDR</span>
&amp; Cognitive Radio Networks in a Reproducible Environment.”</span> In
<em>2014 <span>IEEE Conference</span> on <span>Computer Communications
Workshops</span> (<span>INFOCOM WKSHPS</span>)</em>, 103–4. <a
href="https://doi.org/10.1109/INFCOMW.2014.6849176">https://doi.org/10.1109/INFCOMW.2014.6849176</a>.
</div>
<div id="ref-ONLHome" class="csl-entry" role="listitem">
<span>“<span>ONL Home</span>.”</span> n.d. <a
href="http://opennetlinux.org/">http://opennetlinux.org/</a>.
</div>
<div id="ref-OpenNetworkInstall" class="csl-entry" role="listitem">
<span>“Open <span>Network Install Environment</span> — <span>Open
Network Install Environment</span> Documentation.”</span> n.d. Accessed
January 10, 2025. <a
href="https://opencomputeproject.github.io/onie/">https://opencomputeproject.github.io/onie/</a>.
</div>
<div id="ref-paul_ruth_fabric_nodate" class="csl-entry" role="listitem">
Paul Ruth, and Komal Thareja. n.d. <span>“<span>FABRIC</span> Testbed —
Fablib Documentation — Node.”</span> Accessed February 18, 2025. <a
href="https://fabric-fablib.readthedocs.io/en/latest/node.html">https://fabric-fablib.readthedocs.io/en/latest/node.html</a>.
</div>
<div id="ref-ProjectICOS" class="csl-entry" role="listitem">
<span>“Project <span>ICOS</span>.”</span> n.d. <a
href="https://www.icos-project.eu/">https://www.icos-project.eu/</a>.
</div>
<div id="ref-rosendoE2ClabExploringComputing2020" class="csl-entry"
role="listitem">
Rosendo, Daniel, Pedro Silva, Matthieu Simonin, Alexandru Costan, and
Gabriel Antoniu. 2020. <span>“<span>E2Clab</span>:
<span>Exploring</span> the <span>Computing Continuum</span> Through
<span>Repeatable</span>, <span>Replicable</span> and <span
class="nocase">Reproducible Edge-to-Cloud Experiments</span>.”</span> In
<em>Cluster 2020 - <span>IEEE International Conference</span> on
<span>Cluster Computing</span></em>, 1–11. Kobe, Japan. <a
href="https://doi.org/10.1109/CLUSTER49012.2020.00028">https://doi.org/10.1109/CLUSTER49012.2020.00028</a>.
</div>
<div id="ref-sebosIntegratedIPOptical2004" class="csl-entry"
role="listitem">
Sebos, P., J. Yates, Guangzhi Li, D. Rubenstein, and M. Lazer. n.d.
<span>“An Integrated <span>IP</span>/Optical Approach for Efficient
Access Router Failure Recovery.”</span> In <em>Optical <span>Fiber
Communication Conference</span>, 2004. <span>OFC</span> 2004</em>,
1:289–89. <a
href="https://ieeexplore.ieee.org/document/1359261">https://ieeexplore.ieee.org/document/1359261</a>.
</div>
<div id="ref-wangInferringAveragePath2016" class="csl-entry"
role="listitem">
Wang, Cun, Zhengmin Li, Xiaohong Huang, and Pei Zhang. 2016.
<span>“Inferring the Average as Path Length of the
<span>Internet</span>.”</span> In <em>2016 <span>IEEE International
Conference</span> on <span>Network Infrastructure</span> and
<span>Digital Content</span> (<span>IC-NIDC</span>)</em>, 391–95. <a
href="https://doi.org/10.1109/ICNIDC.2016.7974603">https://doi.org/10.1109/ICNIDC.2016.7974603</a>.
</div>
<div id="ref-white_integrated_2003" class="csl-entry" role="listitem">
White, Brian, Jay Lepreau, Leigh Stoller, Robert Ricci, Shashi
Guruprasad, Mac Newbold, Mike Hibler, Chad Barb, and Abhijeet Joglekar.
2003. <span>“An Integrated Experimental Environment for Distributed
Systems and Networks.”</span> <em>SIGOPS Oper. Syst. Rev.</em> 36 (SI):
255–70. <a
href="https://doi.org/10.1145/844128.844152">https://doi.org/10.1145/844128.844152</a>.
</div>
</div>
<section id="footnotes" class="footnotes footnotes-end-of-document"
role="doc-endnotes">
<hr />
<ol>
<li id="fn1"><p>Are precursors of the “SLICES-FR” French node of
SLICES-RI.<a href="#fnref1" class="footnote-back"
role="doc-backlink">↩︎</a></p></li>
<li id="fn2"><p>Kubernetes/Docker images only<a href="#fnref2"
class="footnote-back" role="doc-backlink">↩︎</a></p></li>
<li id="fn3"><p>Network equipment that is assembled from standardized
commodity parts<a href="#fnref3" class="footnote-back"
role="doc-backlink">↩︎</a></p></li>
<li id="fn4"><p>Number of autonomous systems a data packet traverses
between its source and destination<a href="#fnref4"
class="footnote-back" role="doc-backlink">↩︎</a></p></li>
</ol>
</section>
