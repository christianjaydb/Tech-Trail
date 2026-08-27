const QUESTION_POOL = [
{
"id":1,
"category":"Fundamentals",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"An electronic device that processes data according to instructions.\"",
"choices":[
"Firmware",
"Hardware",
"Computer",
"Software"
],
"answer":"Computer",
"explanation":"Computer is defined as: An electronic device that processes data according to instructions."
},
{
"id":2,
"category":"Fundamentals",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"A combination of hardware, software, data, and users working together.\"",
"choices":[
"Hardware",
"Firmware",
"Computer System",
"Software"
],
"answer":"Computer System",
"explanation":"Computer System is defined as: A combination of hardware, software, data, and users working together."
},
{
"id":3,
"category":"Fundamentals",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"The physical components of a computer.\"",
"choices":[
"Computer System",
"Firmware",
"Software",
"Hardware"
],
"answer":"Hardware",
"explanation":"Hardware is defined as: The physical components of a computer."
},
{
"id":4,
"category":"Fundamentals",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Programs and instructions that tell hardware what to do.\"",
"choices":[
"Hardware",
"Computer",
"Software",
"Computer System"
],
"answer":"Software",
"explanation":"Software is defined as: Programs and instructions that tell hardware what to do."
},
{
"id":5,
"category":"Fundamentals",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Software permanently or semi-permanently stored in hardware.\"",
"choices":[
"Hardware",
"Computer System",
"Firmware",
"Computer"
],
"answer":"Firmware",
"explanation":"Firmware is defined as: Software permanently or semi-permanently stored in hardware."
},
{
"id":6,
"category":"Hardware",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"The processor responsible for executing instructions and processing data.\"",
"choices":[
"CPU",
"Register",
"Cooling Fan",
"GPU"
],
"answer":"CPU",
"explanation":"CPU is defined as: The processor responsible for executing instructions and processing data."
},
{
"id":7,
"category":"Hardware",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"CPU component that performs arithmetic and logical operations.\"",
"choices":[
"ROM",
"GPU",
"ALU",
"Register"
],
"answer":"ALU",
"explanation":"ALU is defined as: CPU component that performs arithmetic and logical operations."
},
{
"id":8,
"category":"Hardware",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"CPU component that directs and coordinates instruction execution.\"",
"choices":[
"Cache Memory",
"NIC",
"Control Unit",
"CPU"
],
"answer":"Control Unit",
"explanation":"Control Unit is defined as: CPU component that directs and coordinates instruction execution."
},
{
"id":9,
"category":"Hardware",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Small, high-speed storage locations inside the CPU.\"",
"choices":[
"Register",
"Sound Card",
"GPU",
"Cooling Fan"
],
"answer":"Register",
"explanation":"Register is defined as: Small, high-speed storage locations inside the CPU."
},
{
"id":10,
"category":"Hardware",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Main circuit board connecting major computer components.\"",
"choices":[
"Motherboard",
"ALU",
"CPU",
"NIC"
],
"answer":"Motherboard",
"explanation":"Motherboard is defined as: Main circuit board connecting major computer components."
},
{
"id":11,
"category":"Hardware",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Temporary memory used by programs and the operating system while running.\"",
"choices":[
"ROM",
"RAM",
"PSU",
"Cooling Fan"
],
"answer":"RAM",
"explanation":"RAM is defined as: Temporary memory used by programs and the operating system while running."
},
{
"id":12,
"category":"Hardware",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Non-volatile memory that stores data that normally does not change frequently.\"",
"choices":[
"GPU",
"ROM",
"Heat Sink",
"Cache Memory"
],
"answer":"ROM",
"explanation":"ROM is defined as: Non-volatile memory that stores data that normally does not change frequently."
},
{
"id":13,
"category":"Hardware",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Very fast memory used to store frequently accessed CPU data and instructions.\"",
"choices":[
"Heat Sink",
"RAM",
"Cache Memory",
"ROM"
],
"answer":"Cache Memory",
"explanation":"Cache Memory is defined as: Very fast memory used to store frequently accessed CPU data and instructions."
},
{
"id":14,
"category":"Hardware",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Processor designed primarily for graphics and parallel computations.\"",
"choices":[
"GPU",
"Control Unit",
"NIC",
"Cache Memory"
],
"answer":"GPU",
"explanation":"GPU is defined as: Processor designed primarily for graphics and parallel computations."
},
{
"id":15,
"category":"Hardware",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Component that converts electrical power into usable power for the computer.\"",
"choices":[
"PSU",
"CPU",
"Cache Memory",
"Cooling Fan"
],
"answer":"PSU",
"explanation":"PSU is defined as: Component that converts electrical power into usable power for the computer."
},
{
"id":16,
"category":"Hardware",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Component that absorbs and dissipates heat from electronic components.\"",
"choices":[
"Control Unit",
"Cache Memory",
"Heat Sink",
"PSU"
],
"answer":"Heat Sink",
"explanation":"Heat Sink is defined as: Component that absorbs and dissipates heat from electronic components."
},
{
"id":17,
"category":"Hardware",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Fan used to move air and remove heat from computer components.\"",
"choices":[
"Control Unit",
"Sound Card",
"Cooling Fan",
"CPU"
],
"answer":"Cooling Fan",
"explanation":"Cooling Fan is defined as: Fan used to move air and remove heat from computer components."
},
{
"id":18,
"category":"Hardware",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Hardware that allows a computer to connect to a network.\"",
"choices":[
"Control Unit",
"Register",
"NIC",
"Expansion Card"
],
"answer":"NIC",
"explanation":"NIC is defined as: Hardware that allows a computer to connect to a network."
},
{
"id":19,
"category":"Hardware",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Hardware responsible for processing audio input and output.\"",
"choices":[
"Cooling Fan",
"Motherboard",
"RAM",
"Sound Card"
],
"answer":"Sound Card",
"explanation":"Sound Card is defined as: Hardware responsible for processing audio input and output."
},
{
"id":20,
"category":"Hardware",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Circuit board added to provide additional computer functionality.\"",
"choices":[
"Expansion Card",
"Motherboard",
"Heat Sink",
"RAM"
],
"answer":"Expansion Card",
"explanation":"Expansion Card is defined as: Circuit board added to provide additional computer functionality."
},
{
"id":21,
"category":"Interfaces & Ports",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Standard interface used to connect peripherals and transfer data.\"",
"choices":[
"HDMI",
"DisplayPort",
"USB",
"VGA"
],
"answer":"USB",
"explanation":"USB is defined as: Standard interface used to connect peripherals and transfer data."
},
{
"id":22,
"category":"Interfaces & Ports",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Interface commonly used to transmit digital video and audio.\"",
"choices":[
"DisplayPort",
"VGA",
"USB",
"HDMI"
],
"answer":"HDMI",
"explanation":"HDMI is defined as: Interface commonly used to transmit digital video and audio."
},
{
"id":23,
"category":"Interfaces & Ports",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Older video interface that primarily transmits analog video.\"",
"choices":[
"HDMI",
"USB",
"DisplayPort",
"VGA"
],
"answer":"VGA",
"explanation":"VGA is defined as: Older video interface that primarily transmits analog video."
},
{
"id":24,
"category":"Interfaces & Ports",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Digital interface commonly used for monitors and displays.\"",
"choices":[
"HDMI",
"VGA",
"USB",
"DisplayPort"
],
"answer":"DisplayPort",
"explanation":"DisplayPort is defined as: Digital interface commonly used for monitors and displays."
},
{
"id":25,
"category":"Peripherals",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Device connected to a computer to provide input, output, or additional functionality.\"",
"choices":[
"Output Device",
"Webcam",
"Microphone",
"Peripheral"
],
"answer":"Peripheral",
"explanation":"Peripheral is defined as: Device connected to a computer to provide input, output, or additional functionality."
},
{
"id":26,
"category":"Peripherals",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Input device used primarily for entering text and commands.\"",
"choices":[
"Touchscreen",
"Peripheral",
"Output Device",
"Keyboard"
],
"answer":"Keyboard",
"explanation":"Keyboard is defined as: Input device used primarily for entering text and commands."
},
{
"id":27,
"category":"Peripherals",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Pointing device used to interact with graphical interfaces.\"",
"choices":[
"Webcam",
"Printer",
"Peripheral",
"Mouse"
],
"answer":"Mouse",
"explanation":"Mouse is defined as: Pointing device used to interact with graphical interfaces."
},
{
"id":28,
"category":"Peripherals",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Output device that displays visual information.\"",
"choices":[
"Keyboard",
"Printer",
"Input Device",
"Monitor"
],
"answer":"Monitor",
"explanation":"Monitor is defined as: Output device that displays visual information."
},
{
"id":29,
"category":"Peripherals",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Output device that produces physical copies of digital information.\"",
"choices":[
"Printer",
"Webcam",
"Monitor",
"Peripheral"
],
"answer":"Printer",
"explanation":"Printer is defined as: Output device that produces physical copies of digital information."
},
{
"id":30,
"category":"Peripherals",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Input device that converts physical documents or images into digital form.\"",
"choices":[
"Microphone",
"Keyboard",
"Scanner",
"Output Device"
],
"answer":"Scanner",
"explanation":"Scanner is defined as: Input device that converts physical documents or images into digital form."
},
{
"id":31,
"category":"Peripherals",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Camera used to capture video for a computer.\"",
"choices":[
"Monitor",
"Output Device",
"Keyboard",
"Webcam"
],
"answer":"Webcam",
"explanation":"Webcam is defined as: Camera used to capture video for a computer."
},
{
"id":32,
"category":"Peripherals",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Input device that captures sound.\"",
"choices":[
"Speaker",
"Scanner",
"Monitor",
"Microphone"
],
"answer":"Microphone",
"explanation":"Microphone is defined as: Input device that captures sound."
},
{
"id":33,
"category":"Peripherals",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Output device that produces sound.\"",
"choices":[
"Microphone",
"Speaker",
"Scanner",
"Printer"
],
"answer":"Speaker",
"explanation":"Speaker is defined as: Output device that produces sound."
},
{
"id":34,
"category":"Peripherals",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Display that detects touch input.\"",
"choices":[
"Scanner",
"Touchscreen",
"Input Device",
"Output Device"
],
"answer":"Touchscreen",
"explanation":"Touchscreen is defined as: Display that detects touch input."
},
{
"id":35,
"category":"Peripherals",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Hardware used to send data or commands to a computer.\"",
"choices":[
"Printer",
"Keyboard",
"Input Device",
"Speaker"
],
"answer":"Input Device",
"explanation":"Input Device is defined as: Hardware used to send data or commands to a computer."
},
{
"id":36,
"category":"Peripherals",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Hardware used to present processed information to a user.\"",
"choices":[
"Webcam",
"Output Device",
"Keyboard",
"Scanner"
],
"answer":"Output Device",
"explanation":"Output Device is defined as: Hardware used to present processed information to a user."
},
{
"id":37,
"category":"Storage",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Hardware used to store data permanently or semi-permanently.\"",
"choices":[
"NVMe",
"HDD",
"Storage Device",
"Memory Card"
],
"answer":"Storage Device",
"explanation":"Storage Device is defined as: Hardware used to store data permanently or semi-permanently."
},
{
"id":38,
"category":"Storage",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Magnetic storage device that uses spinning disks to store data.\"",
"choices":[
"Flash Drive",
"HDD",
"Memory Card",
"SSD"
],
"answer":"HDD",
"explanation":"HDD is defined as: Magnetic storage device that uses spinning disks to store data."
},
{
"id":39,
"category":"Storage",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Storage device that uses flash memory and has no moving parts.\"",
"choices":[
"SSD",
"Optical Disc",
"Storage Device",
"HDD"
],
"answer":"SSD",
"explanation":"SSD is defined as: Storage device that uses flash memory and has no moving parts."
},
{
"id":40,
"category":"Storage",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"High-speed storage protocol commonly used with PCIe-based SSDs.\"",
"choices":[
"NVMe",
"Optical Disc",
"SSD",
"Storage Device"
],
"answer":"NVMe",
"explanation":"NVMe is defined as: High-speed storage protocol commonly used with PCIe-based SSDs."
},
{
"id":41,
"category":"Storage",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Storage medium read using a laser, such as a CD or DVD.\"",
"choices":[
"Optical Disc",
"SSD",
"HDD",
"Memory Card"
],
"answer":"Optical Disc",
"explanation":"Optical Disc is defined as: Storage medium read using a laser, such as a CD or DVD."
},
{
"id":42,
"category":"Storage",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Portable storage device that uses flash memory.\"",
"choices":[
"HDD",
"Flash Drive",
"Storage Device",
"SSD"
],
"answer":"Flash Drive",
"explanation":"Flash Drive is defined as: Portable storage device that uses flash memory."
},
{
"id":43,
"category":"Storage",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Small removable flash-storage device used in many electronic devices.\"",
"choices":[
"HDD",
"Optical Disc",
"NVMe",
"Memory Card"
],
"answer":"Memory Card",
"explanation":"Memory Card is defined as: Small removable flash-storage device used in many electronic devices."
},
{
"id":44,
"category":"Data Units",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Smallest unit of digital data, represented as 0 or 1.\"",
"choices":[
"Megabyte",
"Gigabyte",
"Byte",
"Bit"
],
"answer":"Bit",
"explanation":"Bit is defined as: Smallest unit of digital data, represented as 0 or 1."
},
{
"id":45,
"category":"Data Units",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Group of 8 bits.\"",
"choices":[
"Byte",
"Kilobyte",
"Megabyte",
"Gigabyte"
],
"answer":"Byte",
"explanation":"Byte is defined as: Group of 8 bits."
},
{
"id":46,
"category":"Data Units",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Approximately 1,000 bytes in decimal measurement.\"",
"choices":[
"Megabyte",
"Byte",
"Bit",
"Kilobyte"
],
"answer":"Kilobyte",
"explanation":"Kilobyte is defined as: Approximately 1,000 bytes in decimal measurement."
},
{
"id":47,
"category":"Data Units",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Approximately 1 million bytes.\"",
"choices":[
"Bit",
"Kilobyte",
"Gigabyte",
"Megabyte"
],
"answer":"Megabyte",
"explanation":"Megabyte is defined as: Approximately 1 million bytes."
},
{
"id":48,
"category":"Data Units",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Approximately 1 billion bytes.\"",
"choices":[
"Gigabyte",
"Terabyte",
"Kilobyte",
"Byte"
],
"answer":"Gigabyte",
"explanation":"Gigabyte is defined as: Approximately 1 billion bytes."
},
{
"id":49,
"category":"Data Units",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Approximately 1 trillion bytes.\"",
"choices":[
"Byte",
"Terabyte",
"Kilobyte",
"Bit"
],
"answer":"Terabyte",
"explanation":"Terabyte is defined as: Approximately 1 trillion bytes."
},
{
"id":50,
"category":"Files & Folders",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Information represented in a form that computers can process.\"",
"choices":[
"File",
"Data",
"Folder",
"File Extension"
],
"answer":"Data",
"explanation":"Data is defined as: Information represented in a form that computers can process."
},
{
"id":51,
"category":"Files & Folders",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Named collection of digital data.\"",
"choices":[
"Folder",
"Data",
"File Extension",
"File"
],
"answer":"File",
"explanation":"File is defined as: Named collection of digital data."
},
{
"id":52,
"category":"Files & Folders",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Container used to organize files and other folders.\"",
"choices":[
"Data",
"Folder",
"File Extension",
"File"
],
"answer":"Folder",
"explanation":"Folder is defined as: Container used to organize files and other folders."
},
{
"id":53,
"category":"Files & Folders",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Characters at the end of a filename indicating its file type.\"",
"choices":[
"Folder",
"File Extension",
"Data",
"File"
],
"answer":"File Extension",
"explanation":"File Extension is defined as: Characters at the end of a filename indicating its file type."
},
{
"id":54,
"category":"Operating Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Software that manages computer hardware and provides services for applications.\"",
"choices":[
"System Software",
"Operating System",
"macOS",
"Kernel"
],
"answer":"Operating System",
"explanation":"Operating System is defined as: Software that manages computer hardware and provides services for applications."
},
{
"id":55,
"category":"Operating Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Operating system developed by Microsoft.\"",
"choices":[
"Windows",
"Operating System",
"POST",
"Bootloader"
],
"answer":"Windows",
"explanation":"Windows is defined as: Operating system developed by Microsoft."
},
{
"id":56,
"category":"Operating Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Family of open-source operating systems based on the Linux kernel.\"",
"choices":[
"Windows",
"Linux",
"Application",
"BIOS"
],
"answer":"Linux",
"explanation":"Linux is defined as: Family of open-source operating systems based on the Linux kernel."
},
{
"id":57,
"category":"Operating Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Operating system developed by Apple for Mac computers.\"",
"choices":[
"POST",
"Bootloader",
"macOS",
"Windows"
],
"answer":"macOS",
"explanation":"macOS is defined as: Operating system developed by Apple for Mac computers."
},
{
"id":58,
"category":"Operating Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Mobile operating system developed by Google and based on Linux.\"",
"choices":[
"Utility Software",
"Android",
"Linux",
"Bootloader"
],
"answer":"Android",
"explanation":"Android is defined as: Mobile operating system developed by Google and based on Linux."
},
{
"id":59,
"category":"Operating Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Core component of an operating system that manages hardware and system resources.\"",
"choices":[
"Kernel",
"Bootloader",
"BIOS",
"POST"
],
"answer":"Kernel",
"explanation":"Kernel is defined as: Core component of an operating system that manages hardware and system resources."
},
{
"id":60,
"category":"Operating Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Software that allows an operating system to communicate with hardware.\"",
"choices":[
"Device Driver",
"Utility Software",
"Bootloader",
"System Software"
],
"answer":"Device Driver",
"explanation":"Device Driver is defined as: Software that allows an operating system to communicate with hardware."
},
{
"id":61,
"category":"Operating Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Software designed to perform tasks for users.\"",
"choices":[
"Linux",
"Application",
"UEFI",
"Android"
],
"answer":"Application",
"explanation":"Application is defined as: Software designed to perform tasks for users."
},
{
"id":62,
"category":"Operating Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Software designed to maintain, configure, or manage a computer system.\"",
"choices":[
"Windows",
"Operating System",
"Kernel",
"Utility Software"
],
"answer":"Utility Software",
"explanation":"Utility Software is defined as: Software designed to maintain, configure, or manage a computer system."
},
{
"id":63,
"category":"Operating Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Software responsible for managing computer resources and supporting applications.\"",
"choices":[
"System Software",
"UEFI",
"Android",
"Utility Software"
],
"answer":"System Software",
"explanation":"System Software is defined as: Software responsible for managing computer resources and supporting applications."
},
{
"id":64,
"category":"Operating Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Sequence of operations performed when a computer starts.\"",
"choices":[
"Boot Process",
"Kernel",
"Device Driver",
"Linux"
],
"answer":"Boot Process",
"explanation":"Boot Process is defined as: Sequence of operations performed when a computer starts."
},
{
"id":65,
"category":"Operating Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Firmware traditionally used to initialize hardware and start the boot process.\"",
"choices":[
"BIOS",
"UEFI",
"Utility Software",
"Bootloader"
],
"answer":"BIOS",
"explanation":"BIOS is defined as: Firmware traditionally used to initialize hardware and start the boot process."
},
{
"id":66,
"category":"Operating Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Modern firmware interface that replaces traditional BIOS functionality.\"",
"choices":[
"POST",
"Device Driver",
"UEFI",
"Utility Software"
],
"answer":"UEFI",
"explanation":"UEFI is defined as: Modern firmware interface that replaces traditional BIOS functionality."
},
{
"id":67,
"category":"Operating Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Startup test that checks essential hardware components.\"",
"choices":[
"Boot Process",
"macOS",
"POST",
"Operating System"
],
"answer":"POST",
"explanation":"POST is defined as: Startup test that checks essential hardware components."
},
{
"id":68,
"category":"Operating Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Software responsible for loading an operating system.\"",
"choices":[
"macOS",
"Bootloader",
"Kernel",
"Windows"
],
"answer":"Bootloader",
"explanation":"Bootloader is defined as: Software responsible for loading an operating system."
},
{
"id":69,
"category":"GUI & Processes",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Graphical interface allowing users to interact through visual elements.\"",
"choices":[
"Taskbar",
"Process",
"GUI",
"Virtual Memory"
],
"answer":"GUI",
"explanation":"GUI is defined as: Graphical interface allowing users to interact through visual elements."
},
{
"id":70,
"category":"GUI & Processes",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Interface where users interact with a computer through text commands.\"",
"choices":[
"CLI",
"Page File",
"GUI",
"Taskbar"
],
"answer":"CLI",
"explanation":"CLI is defined as: Interface where users interact with a computer through text commands."
},
{
"id":71,
"category":"GUI & Processes",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Main graphical workspace displayed after logging into an operating system.\"",
"choices":[
"Icon",
"Desktop",
"Taskbar",
"Task Manager"
],
"answer":"Desktop",
"explanation":"Desktop is defined as: Main graphical workspace displayed after logging into an operating system."
},
{
"id":72,
"category":"GUI & Processes",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Interface element commonly used to access applications and system functions.\"",
"choices":[
"Process",
"Virtual Memory",
"Taskbar",
"Thread"
],
"answer":"Taskbar",
"explanation":"Taskbar is defined as: Interface element commonly used to access applications and system functions."
},
{
"id":73,
"category":"GUI & Processes",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Graphical representation of a file, application, device, or function.\"",
"choices":[
"Taskbar",
"Icon",
"GUI",
"Page File"
],
"answer":"Icon",
"explanation":"Icon is defined as: Graphical representation of a file, application, device, or function."
},
{
"id":74,
"category":"GUI & Processes",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Graphical area containing an application or document.\"",
"choices":[
"Window",
"Taskbar",
"Multitasking",
"Thread"
],
"answer":"Window",
"explanation":"Window is defined as: Graphical area containing an application or document."
},
{
"id":75,
"category":"GUI & Processes",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"A program currently being executed by the operating system.\"",
"choices":[
"Task Manager",
"CLI",
"Process",
"Desktop"
],
"answer":"Process",
"explanation":"Process is defined as: A program currently being executed by the operating system."
},
{
"id":76,
"category":"GUI & Processes",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Smallest sequence of programmed instructions that can be managed independently.\"",
"choices":[
"Desktop",
"Window",
"Thread",
"Process"
],
"answer":"Thread",
"explanation":"Thread is defined as: Smallest sequence of programmed instructions that can be managed independently."
},
{
"id":77,
"category":"GUI & Processes",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Ability of an operating system to manage multiple processes.\"",
"choices":[
"Multitasking",
"GUI",
"Window",
"Virtual Memory"
],
"answer":"Multitasking",
"explanation":"Multitasking is defined as: Ability of an operating system to manage multiple processes."
},
{
"id":78,
"category":"GUI & Processes",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Storage space used as an extension of physical RAM.\"",
"choices":[
"Multitasking",
"Virtual Memory",
"Window",
"CLI"
],
"answer":"Virtual Memory",
"explanation":"Virtual Memory is defined as: Storage space used as an extension of physical RAM."
},
{
"id":79,
"category":"GUI & Processes",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Disk space used by an operating system as virtual memory.\"",
"choices":[
"Virtual Memory",
"Window",
"Page File",
"Taskbar"
],
"answer":"Page File",
"explanation":"Page File is defined as: Disk space used by an operating system as virtual memory."
},
{
"id":80,
"category":"GUI & Processes",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"System utility used to view and manage running processes and resources.\"",
"choices":[
"Virtual Memory",
"Task Manager",
"Thread",
"CLI"
],
"answer":"Task Manager",
"explanation":"Task Manager is defined as: System utility used to view and manage running processes and resources."
},
{
"id":81,
"category":"File Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Method used by an operating system to organize and manage stored data.\"",
"choices":[
"File System",
"Formatting",
"exFAT",
"Volume"
],
"answer":"File System",
"explanation":"File System is defined as: Method used by an operating system to organize and manage stored data."
},
{
"id":82,
"category":"File Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"File system commonly used by modern Windows systems.\"",
"choices":[
"exFAT",
"File System",
"NTFS",
"Restore"
],
"answer":"NTFS",
"explanation":"NTFS is defined as: File system commonly used by modern Windows systems."
},
{
"id":83,
"category":"File Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"File system commonly used for compatibility with various devices.\"",
"choices":[
"FAT32",
"Formatting",
"File System",
"Cloud Storage"
],
"answer":"FAT32",
"explanation":"FAT32 is defined as: File system commonly used for compatibility with various devices."
},
{
"id":84,
"category":"File Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"File system designed for flash storage and large files.\"",
"choices":[
"NTFS",
"exFAT",
"File System",
"Formatting"
],
"answer":"exFAT",
"explanation":"exFAT is defined as: File system designed for flash storage and large files."
},
{
"id":85,
"category":"File Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Logical division of a storage device.\"",
"choices":[
"Restore",
"Partition",
"Volume",
"Formatting"
],
"answer":"Partition",
"explanation":"Partition is defined as: Logical division of a storage device."
},
{
"id":86,
"category":"File Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Logical storage area that can contain a file system.\"",
"choices":[
"Cloud Storage",
"exFAT",
"Backup",
"Volume"
],
"answer":"Volume",
"explanation":"Volume is defined as: Logical storage area that can contain a file system."
},
{
"id":87,
"category":"File Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Preparing a storage device or partition for use with a file system.\"",
"choices":[
"Formatting",
"Backup",
"Partition",
"Restore"
],
"answer":"Formatting",
"explanation":"Formatting is defined as: Preparing a storage device or partition for use with a file system."
},
{
"id":88,
"category":"File Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Copy of data kept for recovery purposes.\"",
"choices":[
"File System",
"Cloud Storage",
"FAT32",
"Backup"
],
"answer":"Backup",
"explanation":"Backup is defined as: Copy of data kept for recovery purposes."
},
{
"id":89,
"category":"File Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Process of recovering data or system state from a backup.\"",
"choices":[
"FAT32",
"Formatting",
"Restore",
"Backup"
],
"answer":"Restore",
"explanation":"Restore is defined as: Process of recovering data or system state from a backup."
},
{
"id":90,
"category":"File Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Storage of data on remotely accessible servers.\"",
"choices":[
"exFAT",
"NTFS",
"Cloud Storage",
"Volume"
],
"answer":"Cloud Storage",
"explanation":"Cloud Storage is defined as: Storage of data on remotely accessible servers."
},
{
"id":91,
"category":"Networking Basics",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Group of connected devices that can communicate and share resources.\"",
"choices":[
"Network",
"LAN",
"UTP",
"Wi-Fi"
],
"answer":"Network",
"explanation":"Network is defined as: Group of connected devices that can communicate and share resources."
},
{
"id":92,
"category":"Networking Basics",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Network covering a relatively small geographic area.\"",
"choices":[
"LAN",
"Intranet",
"Ethernet",
"WAN"
],
"answer":"LAN",
"explanation":"LAN is defined as: Network covering a relatively small geographic area."
},
{
"id":93,
"category":"Networking Basics",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Network covering a large geographic area.\"",
"choices":[
"Switch",
"Router",
"WAN",
"Modem"
],
"answer":"WAN",
"explanation":"WAN is defined as: Network covering a large geographic area."
},
{
"id":94,
"category":"Networking Basics",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Wireless local area network.\"",
"choices":[
"Ethernet",
"Network Cable",
"Network",
"WLAN"
],
"answer":"WLAN",
"explanation":"WLAN is defined as: Wireless local area network."
},
{
"id":95,
"category":"Networking Basics",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Personal area network connecting devices around an individual.\"",
"choices":[
"PAN",
"Ethernet",
"UTP",
"LAN"
],
"answer":"PAN",
"explanation":"PAN is defined as: Personal area network connecting devices around an individual."
},
{
"id":96,
"category":"Networking Basics",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Global system of interconnected computer networks.\"",
"choices":[
"Internet",
"Network Cable",
"Ethernet",
"LAN"
],
"answer":"Internet",
"explanation":"Internet is defined as: Global system of interconnected computer networks."
},
{
"id":97,
"category":"Networking Basics",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Private network used within an organization.\"",
"choices":[
"Intranet",
"Modem",
"Access Point",
"Switch"
],
"answer":"Intranet",
"explanation":"Intranet is defined as: Private network used within an organization."
},
{
"id":98,
"category":"Networking Basics",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Common wired networking technology.\"",
"choices":[
"Intranet",
"Network Cable",
"Ethernet",
"WAN"
],
"answer":"Ethernet",
"explanation":"Ethernet is defined as: Common wired networking technology."
},
{
"id":99,
"category":"Networking Basics",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Wireless networking technology based on IEEE 802.11 standards.\"",
"choices":[
"WAN",
"Wi-Fi",
"Internet",
"Network Cable"
],
"answer":"Wi-Fi",
"explanation":"Wi-Fi is defined as: Wireless networking technology based on IEEE 802.11 standards."
},
{
"id":100,
"category":"Networking Basics",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Device that forwards packets between different networks.\"",
"choices":[
"Router",
"WAN",
"Access Point",
"Wi-Fi"
],
"answer":"Router",
"explanation":"Router is defined as: Device that forwards packets between different networks."
},
{
"id":101,
"category":"Networking Basics",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Network device that connects devices within a LAN and forwards frames.\"",
"choices":[
"Modem",
"Network Cable",
"Switch",
"WAN"
],
"answer":"Switch",
"explanation":"Switch is defined as: Network device that connects devices within a LAN and forwards frames."
},
{
"id":102,
"category":"Networking Basics",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Device that provides communication between a local network and an ISP connection.\"",
"choices":[
"Modem",
"Internet",
"Ethernet",
"Intranet"
],
"answer":"Modem",
"explanation":"Modem is defined as: Device that provides communication between a local network and an ISP connection."
},
{
"id":103,
"category":"Networking Basics",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Device that provides wireless network connectivity.\"",
"choices":[
"Internet",
"Ethernet",
"Access Point",
"WLAN"
],
"answer":"Access Point",
"explanation":"Access Point is defined as: Device that provides wireless network connectivity."
},
{
"id":104,
"category":"Networking Basics",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Physical cable used to transmit network data.\"",
"choices":[
"Router",
"Internet",
"WLAN",
"Network Cable"
],
"answer":"Network Cable",
"explanation":"Network Cable is defined as: Physical cable used to transmit network data."
},
{
"id":105,
"category":"Networking Basics",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Unshielded twisted-pair cable commonly used for Ethernet.\"",
"choices":[
"LAN",
"UTP",
"Router",
"WAN"
],
"answer":"UTP",
"explanation":"UTP is defined as: Unshielded twisted-pair cable commonly used for Ethernet."
},
{
"id":106,
"category":"Networking Protocols",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Common connector used with Ethernet twisted-pair cables.\"",
"choices":[
"IP Address",
"Port Number",
"DNS",
"RJ-45"
],
"answer":"RJ-45",
"explanation":"RJ-45 is defined as: Common connector used with Ethernet twisted-pair cables."
},
{
"id":107,
"category":"Networking Protocols",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Logical address assigned to a network interface.\"",
"choices":[
"HTTPS",
"Subnet Mask",
"RJ-45",
"IP Address"
],
"answer":"IP Address",
"explanation":"IP Address is defined as: Logical address assigned to a network interface."
},
{
"id":108,
"category":"Networking Protocols",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Internet Protocol version using 32-bit addresses.\"",
"choices":[
"HTTPS",
"IPv4",
"TCP",
"UDP"
],
"answer":"IPv4",
"explanation":"IPv4 is defined as: Internet Protocol version using 32-bit addresses."
},
{
"id":109,
"category":"Networking Protocols",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Internet Protocol version using 128-bit addresses.\"",
"choices":[
"Subnet Mask",
"Port Number",
"IPv6",
"IPv4"
],
"answer":"IPv6",
"explanation":"IPv6 is defined as: Internet Protocol version using 128-bit addresses."
},
{
"id":110,
"category":"Networking Protocols",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Hardware-level network interface address.\"",
"choices":[
"HTTPS",
"FTP",
"MAC Address",
"DNS"
],
"answer":"MAC Address",
"explanation":"MAC Address is defined as: Hardware-level network interface address."
},
{
"id":111,
"category":"Networking Protocols",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Determines which portion of an IPv4 address identifies the network.\"",
"choices":[
"UDP",
"DHCP",
"TCP",
"Subnet Mask"
],
"answer":"Subnet Mask",
"explanation":"Subnet Mask is defined as: Determines which portion of an IPv4 address identifies the network."
},
{
"id":112,
"category":"Networking Protocols",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Device used to reach destinations outside the local network.\"",
"choices":[
"IPv6",
"Default Gateway",
"FTP",
"IP Address"
],
"answer":"Default Gateway",
"explanation":"Default Gateway is defined as: Device used to reach destinations outside the local network."
},
{
"id":113,
"category":"Networking Protocols",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"System that translates domain names into IP addresses.\"",
"choices":[
"HTTPS",
"Subnet Mask",
"UDP",
"DNS"
],
"answer":"DNS",
"explanation":"DNS is defined as: System that translates domain names into IP addresses."
},
{
"id":114,
"category":"Networking Protocols",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Protocol that automatically provides network configuration information.\"",
"choices":[
"Port Number",
"DHCP",
"HTTPS",
"UDP"
],
"answer":"DHCP",
"explanation":"DHCP is defined as: Protocol that automatically provides network configuration information."
},
{
"id":115,
"category":"Networking Protocols",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Reliable, connection-oriented transport protocol.\"",
"choices":[
"FTP",
"Port Number",
"IPv6",
"TCP"
],
"answer":"TCP",
"explanation":"TCP is defined as: Reliable, connection-oriented transport protocol."
},
{
"id":116,
"category":"Networking Protocols",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Connectionless transport protocol with lower overhead than TCP.\"",
"choices":[
"UDP",
"Port Number",
"MAC Address",
"FTP"
],
"answer":"UDP",
"explanation":"UDP is defined as: Connectionless transport protocol with lower overhead than TCP."
},
{
"id":117,
"category":"Networking Protocols",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Protocol used to transfer web resources.\"",
"choices":[
"MAC Address",
"DHCP",
"RJ-45",
"HTTP"
],
"answer":"HTTP",
"explanation":"HTTP is defined as: Protocol used to transfer web resources."
},
{
"id":118,
"category":"Networking Protocols",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Secure version of HTTP using encryption.\"",
"choices":[
"MAC Address",
"DNS",
"Default Gateway",
"HTTPS"
],
"answer":"HTTPS",
"explanation":"HTTPS is defined as: Secure version of HTTP using encryption."
},
{
"id":119,
"category":"Networking Protocols",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Protocol used for transferring files between systems.\"",
"choices":[
"MAC Address",
"FTP",
"Default Gateway",
"IPv4"
],
"answer":"FTP",
"explanation":"FTP is defined as: Protocol used for transferring files between systems."
},
{
"id":120,
"category":"Networking Protocols",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Logical number used to identify network services or applications.\"",
"choices":[
"IPv6",
"Port Number",
"HTTP",
"UDP"
],
"answer":"Port Number",
"explanation":"Port Number is defined as: Logical number used to identify network services or applications."
},
{
"id":121,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Unit of data transmitted across a network.\"",
"choices":[
"Packet",
"Loopback Address",
"Private IP Address",
"Peer-to-Peer"
],
"answer":"Packet",
"explanation":"Packet is defined as: Unit of data transmitted across a network."
},
{
"id":122,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Maximum amount of data that can be transmitted over a connection in a given period.\"",
"choices":[
"Bandwidth",
"Packet",
"IP Configuration",
"Private IP Address"
],
"answer":"Bandwidth",
"explanation":"Bandwidth is defined as: Maximum amount of data that can be transmitted over a connection in a given period."
},
{
"id":123,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Time delay involved in data transmission.\"",
"choices":[
"Latency",
"Broadcast Address",
"Client",
"IP Configuration"
],
"answer":"Latency",
"explanation":"Latency is defined as: Time delay involved in data transmission."
},
{
"id":124,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Network utility used to test reachability and measure response time.\"",
"choices":[
"Workstation",
"IP Configuration",
"Ping",
"Peer-to-Peer"
],
"answer":"Ping",
"explanation":"Ping is defined as: Network utility used to test reachability and measure response time."
},
{
"id":125,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Network settings such as IP address, subnet mask, gateway, and DNS.\"",
"choices":[
"IP Configuration",
"Localhost",
"Peer-to-Peer",
"Packet"
],
"answer":"IP Configuration",
"explanation":"IP Configuration is defined as: Network settings such as IP address, subnet mask, gateway, and DNS."
},
{
"id":126,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Logical division of an IP network.\"",
"choices":[
"Bandwidth",
"CIDR",
"Subnet",
"Client-Server Model"
],
"answer":"Subnet",
"explanation":"Subnet is defined as: Logical division of an IP network."
},
{
"id":127,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Notation used to represent IP networks using prefix lengths such as /24.\"",
"choices":[
"Localhost",
"Public IP Address",
"Private IP Address",
"CIDR"
],
"answer":"CIDR",
"explanation":"CIDR is defined as: Notation used to represent IP networks using prefix lengths such as /24."
},
{
"id":128,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Address identifying a subnet rather than a specific host.\"",
"choices":[
"Bandwidth",
"CIDR",
"Network Address",
"Host Address"
],
"answer":"Network Address",
"explanation":"Network Address is defined as: Address identifying a subnet rather than a specific host."
},
{
"id":129,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"IPv4 address used to send traffic to all hosts in a subnet.\"",
"choices":[
"Broadcast Address",
"Subnet",
"Latency",
"Host Address"
],
"answer":"Broadcast Address",
"explanation":"Broadcast Address is defined as: IPv4 address used to send traffic to all hosts in a subnet."
},
{
"id":130,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"IP address assigned to a device/interface within a network.\"",
"choices":[
"Server",
"Localhost",
"IP Configuration",
"Host Address"
],
"answer":"Host Address",
"explanation":"Host Address is defined as: IP address assigned to a device/interface within a network."
},
{
"id":131,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"IP address intended for use within private networks.\"",
"choices":[
"IP Configuration",
"Host Address",
"Client-Server Model",
"Private IP Address"
],
"answer":"Private IP Address",
"explanation":"Private IP Address is defined as: IP address intended for use within private networks."
},
{
"id":132,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"IP address routable across the public Internet.\"",
"choices":[
"Client",
"Public IP Address",
"Ping",
"Host Address"
],
"answer":"Public IP Address",
"explanation":"Public IP Address is defined as: IP address routable across the public Internet."
},
{
"id":133,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Address used by a device to communicate with itself.\"",
"choices":[
"Bandwidth",
"Loopback Address",
"Workstation",
"Host Address"
],
"answer":"Loopback Address",
"explanation":"Loopback Address is defined as: Address used by a device to communicate with itself."
},
{
"id":134,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Hostname referring to the local computer.\"",
"choices":[
"Bandwidth",
"IP Configuration",
"Loopback Address",
"Localhost"
],
"answer":"Localhost",
"explanation":"Localhost is defined as: Hostname referring to the local computer."
},
{
"id":135,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Company that provides Internet access.\"",
"choices":[
"ISP",
"CIDR",
"Loopback Address",
"Ping"
],
"answer":"ISP",
"explanation":"ISP is defined as: Company that provides Internet access."
},
{
"id":136,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Computer or system that provides services or resources to other devices.\"",
"choices":[
"Localhost",
"Loopback Address",
"Client-Server Model",
"Server"
],
"answer":"Server",
"explanation":"Server is defined as: Computer or system that provides services or resources to other devices."
},
{
"id":137,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Device or application that requests services from a server.\"",
"choices":[
"Workstation",
"Client",
"Broadcast Address",
"Packet"
],
"answer":"Client",
"explanation":"Client is defined as: Device or application that requests services from a server."
},
{
"id":138,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Architecture where clients request services from servers.\"",
"choices":[
"Broadcast Address",
"ISP",
"Host Address",
"Client-Server Model"
],
"answer":"Client-Server Model",
"explanation":"Client-Server Model is defined as: Architecture where clients request services from servers."
},
{
"id":139,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Network model where devices can communicate directly without a dedicated central server.\"",
"choices":[
"Client-Server Model",
"Peer-to-Peer",
"Packet",
"Broadcast Address"
],
"answer":"Peer-to-Peer",
"explanation":"Peer-to-Peer is defined as: Network model where devices can communicate directly without a dedicated central server."
},
{
"id":140,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Computer used by an individual to perform work or specialized tasks.\"",
"choices":[
"Workstation",
"Network Address",
"Private IP Address",
"Server"
],
"answer":"Workstation",
"explanation":"Workstation is defined as: Computer used by an individual to perform work or specialized tasks."
},
{
"id":141,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Practice of protecting systems, networks, and data from digital threats.\"",
"choices":[
"Vulnerability",
"Cybersecurity",
"Data Privacy",
"Access Control"
],
"answer":"Cybersecurity",
"explanation":"Cybersecurity is defined as: Practice of protecting systems, networks, and data from digital threats."
},
{
"id":142,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Malicious software designed to damage, disrupt, or gain unauthorized access.\"",
"choices":[
"Decryption",
"Malware",
"Exploit",
"Cybersecurity"
],
"answer":"Malware",
"explanation":"Malware is defined as: Malicious software designed to damage, disrupt, or gain unauthorized access."
},
{
"id":143,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Malware that attaches itself to files or programs and can replicate when executed.\"",
"choices":[
"Virus",
"Exploit",
"Patch",
"Antivirus"
],
"answer":"Virus",
"explanation":"Virus is defined as: Malware that attaches itself to files or programs and can replicate when executed."
},
{
"id":144,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Malware capable of spreading automatically across systems or networks.\"",
"choices":[
"Exploit",
"Phishing",
"Malware",
"Worm"
],
"answer":"Worm",
"explanation":"Worm is defined as: Malware capable of spreading automatically across systems or networks."
},
{
"id":145,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Malicious program disguised as legitimate software.\"",
"choices":[
"Trojan",
"Virus",
"Social Engineering",
"Worm"
],
"answer":"Trojan",
"explanation":"Trojan is defined as: Malicious program disguised as legitimate software."
},
{
"id":146,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Malware that encrypts or blocks access to data and demands payment.\"",
"choices":[
"Ransomware",
"Data Privacy",
"Worm",
"Antivirus"
],
"answer":"Ransomware",
"explanation":"Ransomware is defined as: Malware that encrypts or blocks access to data and demands payment."
},
{
"id":147,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Malware designed to secretly collect information about users or systems.\"",
"choices":[
"Social Engineering",
"Virus",
"Password",
"Spyware"
],
"answer":"Spyware",
"explanation":"Spyware is defined as: Malware designed to secretly collect information about users or systems."
},
{
"id":148,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Fraudulent attempt to obtain sensitive information by impersonation.\"",
"choices":[
"Encryption",
"Virus",
"Exploit",
"Phishing"
],
"answer":"Phishing",
"explanation":"Phishing is defined as: Fraudulent attempt to obtain sensitive information by impersonation."
},
{
"id":149,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Secret credential used to authenticate a user.\"",
"choices":[
"Worm",
"Password",
"Cybersecurity",
"Authorization"
],
"answer":"Password",
"explanation":"Password is defined as: Secret credential used to authenticate a user."
},
{
"id":150,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Process of verifying a user's identity.\"",
"choices":[
"Authentication",
"Worm",
"MFA",
"Trojan"
],
"answer":"Authentication",
"explanation":"Authentication is defined as: Process of verifying a user's identity."
},
{
"id":151,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Process of determining what an authenticated user is allowed to access.\"",
"choices":[
"Phishing",
"Virus",
"Authorization",
"Least Privilege"
],
"answer":"Authorization",
"explanation":"Authorization is defined as: Process of determining what an authenticated user is allowed to access."
},
{
"id":152,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Process of converting readable data into an encoded form.\"",
"choices":[
"Encryption",
"Social Engineering",
"Virus",
"MFA"
],
"answer":"Encryption",
"explanation":"Encryption is defined as: Process of converting readable data into an encoded form."
},
{
"id":153,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Process of converting encrypted data back into readable form.\"",
"choices":[
"Ransomware",
"Decryption",
"Threat",
"Social Engineering"
],
"answer":"Decryption",
"explanation":"Decryption is defined as: Process of converting encrypted data back into readable form."
},
{
"id":154,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Security system that controls network traffic based on rules.\"",
"choices":[
"Firewall",
"Vulnerability",
"Trojan",
"Encryption"
],
"answer":"Firewall",
"explanation":"Firewall is defined as: Security system that controls network traffic based on rules."
},
{
"id":155,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Software designed to detect, prevent, and remove malicious software.\"",
"choices":[
"Exploit",
"Worm",
"Antivirus",
"Decryption"
],
"answer":"Antivirus",
"explanation":"Antivirus is defined as: Software designed to detect, prevent, and remove malicious software."
},
{
"id":156,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Authentication requiring two or more verification factors.\"",
"choices":[
"Patch",
"Virus",
"MFA",
"Least Privilege"
],
"answer":"MFA",
"explanation":"MFA is defined as: Authentication requiring two or more verification factors."
},
{
"id":157,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Weakness that could be exploited by a threat.\"",
"choices":[
"Ransomware",
"Malware",
"Authentication",
"Vulnerability"
],
"answer":"Vulnerability",
"explanation":"Vulnerability is defined as: Weakness that could be exploited by a threat."
},
{
"id":158,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Potential cause of harm to a system or its data.\"",
"choices":[
"Threat",
"Vulnerability",
"Decryption",
"Social Engineering"
],
"answer":"Threat",
"explanation":"Threat is defined as: Potential cause of harm to a system or its data."
},
{
"id":159,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Technique or code that takes advantage of a vulnerability.\"",
"choices":[
"Virus",
"Antivirus",
"Exploit",
"Firewall"
],
"answer":"Exploit",
"explanation":"Exploit is defined as: Technique or code that takes advantage of a vulnerability."
},
{
"id":160,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Software update designed to fix bugs or security vulnerabilities.\"",
"choices":[
"Encryption",
"Ransomware",
"Patch",
"MFA"
],
"answer":"Patch",
"explanation":"Patch is defined as: Software update designed to fix bugs or security vulnerabilities."
},
{
"id":161,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Manipulation of people to obtain information or cause an action.\"",
"choices":[
"Social Engineering",
"MFA",
"Ransomware",
"Malware"
],
"answer":"Social Engineering",
"explanation":"Social Engineering is defined as: Manipulation of people to obtain information or cause an action."
},
{
"id":162,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Measures that regulate who or what can access resources.\"",
"choices":[
"Social Engineering",
"Authorization",
"Access Control",
"Password"
],
"answer":"Access Control",
"explanation":"Access Control is defined as: Measures that regulate who or what can access resources."
},
{
"id":163,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Security principle of giving users only the access they need.\"",
"choices":[
"Phishing",
"Least Privilege",
"Exploit",
"Decryption"
],
"answer":"Least Privilege",
"explanation":"Least Privilege is defined as: Security principle of giving users only the access they need."
},
{
"id":164,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Protection and proper handling of personal or sensitive information.\"",
"choices":[
"Cybersecurity",
"Data Privacy",
"Encryption",
"Malware"
],
"answer":"Data Privacy",
"explanation":"Data Privacy is defined as: Protection and proper handling of personal or sensitive information."
},
{
"id":165,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Systematic process of identifying and resolving technical problems.\"",
"choices":[
"Compatibility",
"Plug and Play",
"Troubleshooting",
"BSOD"
],
"answer":"Troubleshooting",
"explanation":"Troubleshooting is defined as: Systematic process of identifying and resolving technical problems."
},
{
"id":166,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Process or tool used to identify the cause of a problem.\"",
"choices":[
"ping Command",
"System Restore Point",
"Diagnostic",
"ipconfig"
],
"answer":"Diagnostic",
"explanation":"Diagnostic is defined as: Process or tool used to identify the cause of a problem."
},
{
"id":167,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Process of restarting a computer.\"",
"choices":[
"Reboot",
"ping Command",
"nslookup",
"Blue Screen"
],
"answer":"Reboot",
"explanation":"Reboot is defined as: Process of restarting a computer."
},
{
"id":168,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Operating mode that starts a system with a limited set of drivers and services.\"",
"choices":[
"Device Manager",
"System Restore Point",
"Compatibility",
"Safe Mode"
],
"answer":"Safe Mode",
"explanation":"Safe Mode is defined as: Operating mode that starts a system with a limited set of drivers and services."
},
{
"id":169,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Windows error screen indicating a serious system problem.\"",
"choices":[
"Task Manager Process",
"Blue Screen",
"Root Cause",
"tracert"
],
"answer":"Blue Screen",
"explanation":"Blue Screen is defined as: Windows error screen indicating a serious system problem."
},
{
"id":170,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Windows utility used to view and manage hardware devices and drivers.\"",
"choices":[
"Overheating",
"Device Manager",
"tracert",
"BSOD"
],
"answer":"Device Manager",
"explanation":"Device Manager is defined as: Windows utility used to view and manage hardware devices and drivers."
},
{
"id":171,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Windows utility that displays system and application event logs.\"",
"choices":[
"Diagnostic",
"Event Viewer",
"Safe Mode",
"ipconfig"
],
"answer":"Event Viewer",
"explanation":"Event Viewer is defined as: Windows utility that displays system and application event logs."
},
{
"id":172,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Windows command-line interface for executing commands.\"",
"choices":[
"Command Prompt",
"PowerShell",
"nslookup",
"tracert"
],
"answer":"Command Prompt",
"explanation":"Command Prompt is defined as: Windows command-line interface for executing commands."
},
{
"id":173,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Microsoft's command-line shell and scripting environment.\"",
"choices":[
"Troubleshooting",
"PowerShell",
"POST Beep",
"Plug and Play"
],
"answer":"PowerShell",
"explanation":"PowerShell is defined as: Microsoft's command-line shell and scripting environment."
},
{
"id":174,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Windows command used to view and manage IP configuration.\"",
"choices":[
"ipconfig",
"Compatibility",
"Troubleshooting",
"Plug and Play"
],
"answer":"ipconfig",
"explanation":"ipconfig is defined as: Windows command used to view and manage IP configuration."
},
{
"id":175,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Command used to test network connectivity to a destination.\"",
"choices":[
"BSOD",
"ping Command",
"Driver Update",
"Root Cause"
],
"answer":"ping Command",
"explanation":"ping Command is defined as: Command used to test network connectivity to a destination."
},
{
"id":176,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Windows command used to trace the path packets take to a destination.\"",
"choices":[
"tracert",
"Troubleshooting",
"Command Prompt",
"Blue Screen"
],
"answer":"tracert",
"explanation":"tracert is defined as: Windows command used to trace the path packets take to a destination."
},
{
"id":177,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Command used to query DNS information.\"",
"choices":[
"Task Manager Process",
"Diagnostic",
"Blue Screen",
"nslookup"
],
"answer":"nslookup",
"explanation":"nslookup is defined as: Command used to query DNS information."
},
{
"id":178,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Running program or service displayed and managed through Task Manager.\"",
"choices":[
"System Restore Point",
"Task Manager Process",
"Overheating",
"Reboot"
],
"answer":"Task Manager Process",
"explanation":"Task Manager Process is defined as: Running program or service displayed and managed through Task Manager."
},
{
"id":179,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Installation of a newer version of hardware-support software.\"",
"choices":[
"Root Cause",
"PowerShell",
"Driver Update",
"Software Update"
],
"answer":"Driver Update",
"explanation":"Driver Update is defined as: Installation of a newer version of hardware-support software."
},
{
"id":180,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Windows feature that can return system settings to an earlier restore point.\"",
"choices":[
"System Restore",
"BSOD",
"nslookup",
"Troubleshooting"
],
"answer":"System Restore",
"explanation":"System Restore is defined as: Windows feature that can return system settings to an earlier restore point."
},
{
"id":181,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"New version or patch that improves or fixes software.\"",
"choices":[
"Power Cycle",
"Software Update",
"Troubleshooting",
"Compatibility"
],
"answer":"Software Update",
"explanation":"Software Update is defined as: New version or patch that improves or fixes software."
},
{
"id":182,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Ability of hardware or software to work correctly with another system.\"",
"choices":[
"Root Cause",
"Software Update",
"Compatibility",
"nslookup"
],
"answer":"Compatibility",
"explanation":"Compatibility is defined as: Ability of hardware or software to work correctly with another system."
},
{
"id":183,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Technology that allows hardware to be detected and configured automatically.\"",
"choices":[
"ping Command",
"Plug and Play",
"System Restore",
"Safe Mode"
],
"answer":"Plug and Play",
"explanation":"Plug and Play is defined as: Technology that allows hardware to be detected and configured automatically."
},
{
"id":184,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Situation where drivers interfere with each other or system operation.\"",
"choices":[
"Driver Conflict",
"ping Command",
"Troubleshooting",
"System Restore"
],
"answer":"Driver Conflict",
"explanation":"Driver Conflict is defined as: Situation where drivers interfere with each other or system operation."
},
{
"id":185,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Condition where hardware reaches excessively high temperatures.\"",
"choices":[
"System Restore",
"BSOD",
"Overheating",
"Root Cause"
],
"answer":"Overheating",
"explanation":"Overheating is defined as: Condition where hardware reaches excessively high temperatures."
},
{
"id":186,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Audible signal from firmware indicating startup hardware status or errors.\"",
"choices":[
"POST Beep",
"System Restore",
"Compatibility",
"Driver Conflict"
],
"answer":"POST Beep",
"explanation":"POST Beep is defined as: Audible signal from firmware indicating startup hardware status or errors."
},
{
"id":187,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Abbreviation for Blue Screen of Death.\"",
"choices":[
"PowerShell",
"Driver Conflict",
"BSOD",
"Device Manager"
],
"answer":"BSOD",
"explanation":"BSOD is defined as: Abbreviation for Blue Screen of Death."
},
{
"id":188,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Completely powering a device off and then turning it back on.\"",
"choices":[
"Plug and Play",
"Blue Screen",
"Power Cycle",
"System Restore Point"
],
"answer":"Power Cycle",
"explanation":"Power Cycle is defined as: Completely powering a device off and then turning it back on."
},
{
"id":189,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Saved system configuration state used for recovery.\"",
"choices":[
"System Restore Point",
"Event Viewer",
"Compatibility",
"PowerShell"
],
"answer":"System Restore Point",
"explanation":"System Restore Point is defined as: Saved system configuration state used for recovery."
},
{
"id":190,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Fundamental reason why a problem occurred.\"",
"choices":[
"Root Cause",
"System Restore",
"Troubleshooting",
"POST Beep"
],
"answer":"Root Cause",
"explanation":"Root Cause is defined as: Fundamental reason why a problem occurred."
},
{
"id":191,
"category":"Software & IT Support",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Software whose source code is available under licensing terms allowing inspection or modification.\"",
"choices":[
"Help Desk",
"Open Source",
"Open Source License",
"Database"
],
"answer":"Open Source",
"explanation":"Open Source is defined as: Software whose source code is available under licensing terms allowing inspection or modification."
},
{
"id":192,
"category":"Software & IT Support",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Software controlled by an individual or organization with restricted source code.\"",
"choices":[
"Open Source License",
"SQL",
"Database Management System",
"Proprietary Software"
],
"answer":"Proprietary Software",
"explanation":"Proprietary Software is defined as: Software controlled by an individual or organization with restricted source code."
},
{
"id":193,
"category":"Software & IT Support",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Legal terms governing the use or distribution of software.\"",
"choices":[
"Proprietary Software",
"Open Source",
"License",
"SQL"
],
"answer":"License",
"explanation":"License is defined as: Legal terms governing the use or distribution of software."
},
{
"id":194,
"category":"Software & IT Support",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"License defining how open-source software can be used, modified, and distributed.\"",
"choices":[
"Open Source License",
"Authentication Credential",
"Database",
"SQL"
],
"answer":"Open Source License",
"explanation":"Open Source License is defined as: License defining how open-source software can be used, modified, and distributed."
},
{
"id":195,
"category":"Software & IT Support",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Organized collection of structured data.\"",
"choices":[
"Database",
"Database Management System",
"Open Source License",
"Help Desk"
],
"answer":"Database",
"explanation":"Database is defined as: Organized collection of structured data."
},
{
"id":196,
"category":"Software & IT Support",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Software used to create, manage, and access databases.\"",
"choices":[
"Help Desk",
"Open Source",
"Database",
"Database Management System"
],
"answer":"Database Management System",
"explanation":"Database Management System is defined as: Software used to create, manage, and access databases."
},
{
"id":197,
"category":"Software & IT Support",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Language commonly used to interact with relational databases.\"",
"choices":[
"Authentication Credential",
"Database",
"Open Source License",
"SQL"
],
"answer":"SQL",
"explanation":"SQL is defined as: Language commonly used to interact with relational databases."
},
{
"id":198,
"category":"Software & IT Support",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Information used to prove a user's identity.\"",
"choices":[
"Open Source License",
"Open Source",
"IT Support",
"Authentication Credential"
],
"answer":"Authentication Credential",
"explanation":"Authentication Credential is defined as: Information used to prove a user's identity."
},
{
"id":199,
"category":"Software & IT Support",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Service that helps users troubleshoot and resolve technology-related issues.\"",
"choices":[
"Authentication Credential",
"Open Source License",
"IT Support",
"SQL"
],
"answer":"IT Support",
"explanation":"IT Support is defined as: Service that helps users troubleshoot and resolve technology-related issues."
},
{
"id":200,
"category":"Software & IT Support",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"Which term best matches this definition: \"Support function responsible for assisting users with technical problems and requests.\"",
"choices":[
"SQL",
"Authentication Credential",
"Open Source License",
"Help Desk"
],
"answer":"Help Desk",
"explanation":"Help Desk is defined as: Support function responsible for assisting users with technical problems and requests."
},
{
"id":201,
"category":"Hardware",
"difficulty":"Easy",
"type":"true-false",
"question":"RAM is volatile memory, meaning its contents are lost when power is removed.",
"choices":[
"True",
"False"
],
"answer":"True",
"explanation":"RAM loses its stored data as soon as the computer loses power, which is why it is called volatile memory."
},
{
"id":202,
"category":"Hardware",
"difficulty":"Easy",
"type":"true-false",
"question":"ROM is typically used to store data that changes many times per second.",
"choices":[
"True",
"False"
],
"answer":"False",
"explanation":"ROM stores data that rarely changes, such as firmware, not fast-changing runtime data."
},
{
"id":203,
"category":"Operating Systems",
"difficulty":"Medium",
"type":"true-false",
"question":"Linux is an example of a proprietary operating system with closed source code.",
"choices":[
"True",
"False"
],
"answer":"False",
"explanation":"Linux is open-source; its source code is publicly available for inspection and modification."
},
{
"id":204,
"category":"Networking Basics",
"difficulty":"Easy",
"type":"true-false",
"question":"A LAN typically covers a much smaller geographic area than a WAN.",
"choices":[
"True",
"False"
],
"answer":"True",
"explanation":"A LAN connects devices within a limited area like a home or office, while a WAN spans large distances."
},
{
"id":205,
"category":"Networking Protocols",
"difficulty":"Medium",
"type":"true-false",
"question":"HTTPS encrypts data exchanged between a browser and a web server, while HTTP does not.",
"choices":[
"True",
"False"
],
"answer":"True",
"explanation":"HTTPS adds encryption on top of HTTP, protecting data in transit; plain HTTP sends data unencrypted."
},
{
"id":206,
"category":"Networking Protocols",
"difficulty":"Medium",
"type":"true-false",
"question":"TCP guarantees delivery of data and UDP does not.",
"choices":[
"True",
"False"
],
"answer":"True",
"explanation":"TCP is connection-oriented and reliable, while UDP is connectionless and does not guarantee delivery."
},
{
"id":207,
"category":"Cybersecurity",
"difficulty":"Easy",
"type":"true-false",
"question":"A firewall is designed to physically cool down overheating hardware.",
"choices":[
"True",
"False"
],
"answer":"False",
"explanation":"A firewall controls network traffic based on security rules; it has nothing to do with physical cooling."
},
{
"id":208,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"true-false",
"question":"Multi-factor authentication (MFA) relies on only one method to verify a user's identity.",
"choices":[
"True",
"False"
],
"answer":"False",
"explanation":"MFA requires two or more independent verification factors, not just one."
},
{
"id":209,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"true-false",
"question":"A worm can spread across a network automatically without needing to attach itself to another file.",
"choices":[
"True",
"False"
],
"answer":"True",
"explanation":"Unlike a virus, a worm can self-replicate and spread across systems and networks without a host file."
},
{
"id":210,
"category":"Storage",
"difficulty":"Easy",
"type":"true-false",
"question":"An SSD has moving mechanical parts similar to an HDD.",
"choices":[
"True",
"False"
],
"answer":"False",
"explanation":"An SSD uses flash memory with no moving parts, unlike an HDD which uses spinning magnetic disks."
},
{
"id":211,
"category":"File Systems",
"difficulty":"Medium",
"type":"true-false",
"question":"NTFS is the default modern file system used by Windows.",
"choices":[
"True",
"False"
],
"answer":"True",
"explanation":"NTFS is the standard file system used by modern versions of Windows."
},
{
"id":212,
"category":"Troubleshooting",
"difficulty":"Medium",
"type":"true-false",
"question":"Booting into Safe Mode loads the operating system with a full set of drivers and startup programs.",
"choices":[
"True",
"False"
],
"answer":"False",
"explanation":"Safe Mode loads only a minimal set of drivers and services to help isolate problems."
},
{
"id":213,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"true-false",
"question":"A /24 subnet in IPv4 provides 256 total addresses, with some reserved for network and broadcast use.",
"choices":[
"True",
"False"
],
"answer":"True",
"explanation":"A /24 subnet has 256 total addresses, but the first is the network address and the last is the broadcast address, leaving 254 usable."
},
{
"id":214,
"category":"Fundamentals",
"difficulty":"Easy",
"type":"true-false",
"question":"Firmware is software that is permanently or semi-permanently stored in hardware.",
"choices":[
"True",
"False"
],
"answer":"True",
"explanation":"Firmware is low-level software embedded in hardware devices to control their basic functions."
},
{
"id":215,
"category":"Data Units",
"difficulty":"Easy",
"type":"true-false",
"question":"A byte is made up of 8 bits.",
"choices":[
"True",
"False"
],
"answer":"True",
"explanation":"A byte is defined as a group of 8 bits."
},
{
"id":216,
"category":"Hardware",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"A user reports that their computer has become extremely slow after opening many applications at once. Which component is most likely under heavy usage?",
"choices":[
"RAM",
"Monitor",
"Keyboard",
"Printer"
],
"answer":"RAM",
"explanation":"Opening many applications simultaneously consumes available memory, so RAM is most likely the bottleneck causing the slowdown."
},
{
"id":217,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"A computer powers on, the fans spin, but the monitor displays nothing. What should a technician check first?",
"choices":[
"The video cable and display connection",
"The Wi-Fi password",
"The printer driver",
"The web browser settings"
],
"answer":"The video cable and display connection",
"explanation":"When a system powers on but shows no display, the most likely first check is the physical video connection between the computer and the monitor."
},
{
"id":218,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"A user cannot access websites by domain name but can successfully ping an IP address directly. Which service should be investigated first?",
"choices":[
"DNS",
"DHCP",
"USB",
"Bluetooth"
],
"answer":"DNS",
"explanation":"Since the IP address works but the domain name does not resolve, the issue points to a DNS resolution problem."
},
{
"id":219,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"A user cannot access the Internet, but other users on the same network can. What should be checked first?",
"choices":[
"That user's network cable or Wi-Fi connection and IP configuration",
"The ISP's global outage status",
"The organization's firewall rules for all users",
"The DNS root servers"
],
"answer":"That user's network cable or Wi-Fi connection and IP configuration",
"explanation":"If only one user is affected while others work fine, the problem is most likely local to that device, such as its cable, Wi-Fi link, or IP settings."
},
{
"id":220,
"category":"Cybersecurity",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"An employee receives an email claiming to be from their bank, urging them to click a link and enter their password immediately. This is most likely an example of:",
"choices":[
"Phishing",
"A firewall alert",
"A software patch",
"A device driver update"
],
"answer":"Phishing",
"explanation":"This scenario describes a fraudulent attempt to trick the user into revealing sensitive information, which is the definition of phishing."
},
{
"id":221,
"category":"Cybersecurity",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"A company only gives employees access to the specific files and systems required for their job, and nothing more. This practice reflects the principle of:",
"choices":[
"Least Privilege",
"Social Engineering",
"Public IP Addressing",
"Firmware Updating"
],
"answer":"Least Privilege",
"explanation":"Granting users only the access they need to perform their duties is the definition of the least privilege principle."
},
{
"id":222,
"category":"Operating Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"A technician wants to view which processes are consuming the most CPU and memory on a Windows computer. Which tool should they use?",
"choices":[
"Task Manager",
"Device Manager",
"Event Viewer",
"Command Prompt"
],
"answer":"Task Manager",
"explanation":"Task Manager is the Windows utility used to view and manage running processes and their resource usage."
},
{
"id":223,
"category":"Troubleshooting",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"A newly installed hardware device is not working correctly, and the technician suspects an outdated or incompatible driver. Which tool would help diagnose this in Windows?",
"choices":[
"Device Manager",
"Task Manager",
"File Explorer",
"Control Panel Sound settings"
],
"answer":"Device Manager",
"explanation":"Device Manager lets a technician view installed hardware and check for driver issues or conflicts."
},
{
"id":224,
"category":"Storage",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"A user needs to store important files somewhere they can access from multiple devices over the Internet. Which option best fits this need?",
"choices":[
"Cloud Storage",
"An internal HDD only",
"A CPU cache",
"ROM"
],
"answer":"Cloud Storage",
"explanation":"Cloud storage keeps data on remote servers accessible from any device with an Internet connection."
},
{
"id":225,
"category":"Networking Basics",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"A small office wants all its employee devices to connect wirelessly to the same local network. Which device is primarily responsible for providing that wireless connectivity?",
"choices":[
"Access Point",
"Optical Disc Drive",
"Sound Card",
"Heat Sink"
],
"answer":"Access Point",
"explanation":"An access point provides wireless connectivity so devices can join a local network without a physical cable."
},
{
"id":226,
"category":"Command-Line Tools",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which Windows command displays the current IP address, subnet mask, and default gateway of a computer?",
"choices":[
"ipconfig",
"tracert",
"nslookup",
"ping"
],
"answer":"ipconfig",
"explanation":"The ipconfig command displays the current TCP/IP network configuration of a Windows device."
},
{
"id":227,
"category":"Command-Line Tools",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"A technician wants to test whether a remote server is reachable and measure the response time. Which command should they use?",
"choices":[
"ping",
"ipconfig",
"Device Manager",
"Task Manager"
],
"answer":"ping",
"explanation":"The ping command tests connectivity to a destination and reports how long responses take to return."
},
{
"id":228,
"category":"Command-Line Tools",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Which command shows the path, including intermediate routers, that packets take to reach a destination?",
"choices":[
"tracert",
"ipconfig",
"nslookup",
"ping"
],
"answer":"tracert",
"explanation":"tracert traces the route packets take across multiple hops to reach a destination, showing each intermediate device."
},
{
"id":229,
"category":"Command-Line Tools",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"A technician suspects a domain name is not resolving to the correct IP address. Which command can be used to query DNS records directly?",
"choices":[
"nslookup",
"tracert",
"ipconfig",
"PowerShell only"
],
"answer":"nslookup",
"explanation":"nslookup is used to query DNS servers directly and check how a domain name resolves."
},
{
"id":230,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"A computer displays a Blue Screen of Death (BSOD) repeatedly after a recent driver installation. What is the most appropriate first troubleshooting step?",
"choices":[
"Boot into Safe Mode and roll back or remove the new driver",
"Replace the power supply",
"Reformat the primary partition",
"Update the BIOS immediately"
],
"answer":"Boot into Safe Mode and roll back or remove the new driver",
"explanation":"Since the BSOD started after a driver install, the most direct step is to boot into Safe Mode and remove or roll back that driver."
},
{
"id":231,
"category":"Troubleshooting",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"A user's computer has been shutting down unexpectedly during intensive tasks like gaming. What is the most likely cause to investigate first?",
"choices":[
"Overheating due to dust buildup or fan failure",
"A missing desktop icon",
"An incorrect screen resolution",
"A slow mouse cursor"
],
"answer":"Overheating due to dust buildup or fan failure",
"explanation":"Unexpected shutdowns during heavy workloads are commonly caused by overheating, often from dust buildup or a failing cooling fan."
},
{
"id":232,
"category":"Troubleshooting",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"A technician wants to undo recent system changes that may have caused instability, without deleting personal files. Which Windows feature is designed for this?",
"choices":[
"System Restore",
"Formatting",
"Backup only",
"BIOS Reset"
],
"answer":"System Restore",
"explanation":"System Restore returns system settings to an earlier restore point without deleting personal files."
},
{
"id":233,
"category":"Troubleshooting",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"On startup, a computer emits a series of beeps and fails to boot, with no video output. This is best described as:",
"choices":[
"A POST beep pattern indicating a hardware startup issue",
"A successful boot sequence",
"A software licensing error",
"A DNS resolution failure"
],
"answer":"A POST beep pattern indicating a hardware startup issue",
"explanation":"Beep codes during startup are generated by firmware during POST to indicate a detected hardware problem before video output is available."
},
{
"id":234,
"category":"Software & IT Support",
"difficulty":"Easy",
"type":"multiple-choice",
"question":"A user submits a ticket describing a printer issue and requests help resolving it. Which support function typically handles this first?",
"choices":[
"Help Desk",
"Database Administration",
"Firmware Development",
"Network Address Translation"
],
"answer":"Help Desk",
"explanation":"The help desk is the support function responsible for assisting users with technical problems and requests like this."
},
{
"id":235,
"category":"File Systems",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"A USB flash drive needs to store very large files and be usable on both Windows and macOS. Which file system is best suited for this?",
"choices":[
"exFAT",
"NTFS only",
"A Windows-only proprietary format",
"ROM"
],
"answer":"exFAT",
"explanation":"exFAT is designed for flash storage, supports large files, and offers strong cross-platform compatibility between Windows and macOS."
},
{
"id":236,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Given the address 192.168.1.50/24, what is the network address?",
"choices":[
"192.168.1.0",
"192.168.1.1",
"192.168.1.255",
"192.168.0.0"
],
"answer":"192.168.1.0",
"explanation":"With a /24 mask (255.255.255.0), the last octet is the host portion, so the network address is 192.168.1.0."
},
{
"id":237,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"Given the address 192.168.1.50/24, what is the broadcast address for this subnet?",
"choices":[
"192.168.1.255",
"192.168.1.0",
"192.168.1.1",
"192.168.255.255"
],
"answer":"192.168.1.255",
"explanation":"In a /24 subnet, the broadcast address is the last address in the range, where all host bits are set to 1: 192.168.1.255."
},
{
"id":238,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"How many usable host addresses are available in a standard /24 IPv4 subnet?",
"choices":[
"254",
"256",
"255",
"253"
],
"answer":"254",
"explanation":"A /24 subnet has 256 total addresses, but one is reserved for the network address and one for the broadcast address, leaving 254 usable hosts."
},
{
"id":239,
"category":"Networking Concepts",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which of the following is a private IPv4 address range?",
"choices":[
"192.168.0.0 - 192.168.255.255",
"8.8.8.0 - 8.8.8.255",
"1.1.1.0 - 1.1.1.255",
"203.0.113.0 - 203.0.113.255"
],
"answer":"192.168.0.0 - 192.168.255.255",
"explanation":"192.168.0.0/16 is one of the reserved private IPv4 ranges used within local networks and not routed on the public Internet."
},
{
"id":240,
"category":"Networking Concepts",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"What is the standard loopback address used by a device to communicate with itself in IPv4?",
"choices":[
"127.0.0.1",
"192.168.1.1",
"255.255.255.255",
"0.0.0.0"
],
"answer":"127.0.0.1",
"explanation":"127.0.0.1 is the standard IPv4 loopback address, allowing a device to send traffic to itself for testing."
},
{
"id":241,
"category":"Networking Protocols",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which protocol automatically assigns IP addresses and network configuration to devices joining a network?",
"choices":[
"DHCP",
"DNS",
"FTP",
"SQL"
],
"answer":"DHCP",
"explanation":"DHCP automatically provides devices with IP addresses and other network configuration information when they join a network."
},
{
"id":242,
"category":"Networking Concepts",
"difficulty":"Hard",
"type":"multiple-choice",
"question":"What does the CIDR notation \"/26\" indicate about a subnet compared to a \"/24\" subnet?",
"choices":[
"It has a smaller subnet with fewer usable host addresses",
"It has more usable host addresses than a /24",
"It uses IPv6 instead of IPv4",
"It disables the default gateway"
],
"answer":"It has a smaller subnet with fewer usable host addresses",
"explanation":"A larger CIDR prefix like /26 borrows more bits for the network portion, resulting in a smaller subnet with fewer usable host addresses than a /24."
},
{
"id":243,
"category":"Networking Protocols",
"difficulty":"Medium",
"type":"multiple-choice",
"question":"Which port number is most commonly associated with standard unencrypted HTTP web traffic?",
"choices":[
"80",
"443",
"21",
"25"
],
"answer":"80",
"explanation":"Port 80 is the standard port used for unencrypted HTTP traffic, while port 443 is used for HTTPS."
}
];
