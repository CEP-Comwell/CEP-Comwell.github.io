---
layout: page
title: HCI
subtitle: Hyper-converged Infrastructure
---

Hyper-converged infrastructure (HCI) is a software-defined IT framework that virtualizes all elements of conventional hardware-defined systems. It integrates computing, storage, and networking into a single system managed by a hypervisor software layer

Key features of HCI include:

Virtualization: Combines compute, storage, and networking into a unified system.
Software-defined: Uses software to manage and control the infrastructure, reducing reliance on specialized hardware.
Scalability: Easily scalable by adding more nodes to the system.
Simplified management: Centralized management through a single interface:



1. #### [HCI-1100 Proxmox 2-node cluster](#hci-1100-proxmox-2-node-cluster)
    1. [HCI-1100-100 Flash installer to USB](https://etcher-docs.balena.io/?&){:target="_blank"}
    1. [HCI-1100-101 Proxmox VE setup procedure](#hci-1100-101-proxmox-ve-setup-procedure)
    1. HCI-1100-102 Setup Network bridging
    1. HCI-1100-103 Setup NFS to shared storage
    1. HCI-1100-104 Test Network Performance
    1. HCI-1100-105 Create Cloudinit Template
    1. HCI-1100-106 Install Docker host vm
1. #### HCI-1200 TrueNAS Shared storage
    1. HCI-1200-100 Setup Network bridging
    1. HCI-1200-101 Setup Boot pool & initial config
    1. HCI-1200-102 Setup ZFS storage pool
    1. HCI-1200-103 Setup dataset
    1. HCI-1200-104 Setup Data Protection
    1. HCI-1200-105 Setup NFS share
    1. HCI-1200-106 Test Network Performance
1. #### HCI-1300 Setup Ansible Controller node
    1. HCI-1300-100 Setup Credentials Vault
    1. HCI-1300-101 Configure DevOps Groups
    1. HCI-1300-102 Connect to Git repository
1. #### HCI-1400 Setup DevOps Secure Access
    1. HCI-1400-100 Configure ZTNA Access Policies
    1. HCI-1400-101 Deploy ZTNA Router to DevOps zone


What else do you need?

### HCI-1100 Proxmox 2-node cluster
  1. #### [HCI-1100-100 Flash installer to USB](https://etcher-docs.balena.io/?&){:target="_blank"}
  1. #### HCI-1100-101 Proxmox VE setup procedure
      1. Configure Network:
          1. Configure a hostname i.e. pve1.comwell.edgesec.ca
          1. Select NIC0 as primary on VMBR0
          1. Assign static ip address 172.16.10.x/24 with gateway 172.16.10.1
          1. Assign dns to 9.9.9.9 (Quad9)
      1. Set timezone America/Vancouver
      1. Configure storage
          1. Choose Other and select ZFS (RAID1)
          1. Select /dev/nvme0n1 and /dev/nvme1n1
          1. Unselect any additional harddisk and click on OK to continue ![](/assets/img/pve_storage.png)
      1. Setup a default admin password for the Root user
          1. Update IT Glue and Bitwarden collections
      1. Reboot: Once the installation is complete, connect to the web GUI  on the default port 8006 https://172.16.10.20:8006
  * HCI-1100-102 Setup Network bridging
  * HCI-1100-103 Setup NFS to shared storage
  * HCI-1100-104 Test Network Performance
  * HCI-1100-105 Create Cloudinit Template
  * HCI-1100-106 Install Docker host vm
### Install Docker host
  1. Install Docker
  2. ##
<tab><tab>code/"curl -fsSL https://download.docker.com/linux/ubuntu/gpg"

To be honest, I'm having some trouble remembering right now, so why don't you just watch [my movie](https://en.wikipedia.org/wiki/The_Princess_Bride_%28film%29) and it will answer **all** your questions.
