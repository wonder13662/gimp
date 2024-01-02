# 2.1. Running GIMP
Usually you start GIMP either by clicking an icon (if your system is set up to provide you with one), or by typing **gimp** on a command line. If you have multiple versions of GIMP installed, you may need to type **gimp-2.10** to get the newest version. You can, if you want, provide a list of image file names on the command line after the program name so that GIMP automatically opens those files after it starts. It is also possible, though, to open files from within GIMP once it is running.

Most operating systems support file associations, which associates a class of files (as determined by their filename extension, such as `.jpg`) with a corresponding application (such as GIMP). When image files are properly "associated" to GIMP, you can double click an image to open it in GIMP.

## 2.1.1. Known Platforms
GIMP is the most widely supported image manipulation program available today. The platforms on which GIMP is known to work include:

- GNU/Linux™
- Apple macOS™
- Microsoft Windows™
- OpenBSD™
- NetBSD™
- FreeBSD™
- Solaris™
- SunOS™
- AIX™
- HP-UX™
- Tru64™
- Digital UNIX™
- OSF/1™
- IRIX™
- OS/2™
- BeOS™

GIMP is easily ported to other operating systems because of its source code availability. For further information visit the GIMP developers homepage. [GIMP-DEV](https://developer.gimp.org/)

## 2.1.2. Language
GIMP automatically detects and uses the system language. In the unlikely event that language detection fails, or if you want to use a different language, you can change the language used in: `Edit` → `Preference`, then go to the `Interface` section; `Language` can be set at the top.

You can also use:
### Under Linux
In LINUX: in console mode, type `LANGUAGE=en gimp` or `LANG=en gimp` replacing en with fr, de, ... according to the language you want. Background: Using `LANGUAGE=en` sets an environment variable for the executed program **gimp**.

### Under Windows
`Control Panel` → `System` → `Advanced` → `Environment` button in "System Variables" area: **Add** button: Enter LANG for Name and fr or de... for Value. Watch out! You have to click **OK** three successive times to validate your choice.

If you change language often, you can create a batch file to change the language. Open NotePad. Type the following commands (for French for instance):
```
set lang=fr
start gimp-2.10.exe
```
Save this file as `GIMP-FR.BAT` (or another name, but always with a `.BAT` extension). Create a shortcut and drag it to your desktop.

Another possibility: `Start` → `Programs` → `GTK Runtime Environment` Then `Select language` and select the language you want in the drop-down list.

### Under Apple macOS
From `System Settings`, click **General** in the sidebar. Then select `Language & Region`. The desired language should be the first in the list.

### Another GIMP instance
Use `-n` to run multiple instances of GIMP. For example, use **gimp-2.10** to start GIMP in the default system language, and `LANGUAGE=en gimp-2.10 -n` to start another instance of GIMP in English; this is very useful for translators.

## 2.1.3. Command Line Arguments
Although arguments are not required when starting GIMP, the most common arguments are shown below. On a Unix system, you can use `man gimp` for a complete list.

Command line arguments must be in the command line that you use to start GIMP as `gimp-2.10 [OPTION...] [FILE|URI...]`.

### `-?`, `--help`
Display a list of all commandline options.

### `--help-all`
Show all help options.

### `--help-gtk`
Show GTK+ Options.

### `-v`, `--version`
Print the GIMP version and exit.

### `--license`
Show license information and exit.

### `--verbose`
Show detailed start-up messages.

### `-n`, `-new-instance`
Start a new GIMP instance.

### `-a`, `-as-new`
Open images as new.

### `-i`, `-no-interface`
Run without a user interface.

### `-d`, `-no-data`
Do not load patterns, gradients, palettes, or brushes. Often useful in non-interactive situations where start-up time is to be minizied.

### `-f`, `-no-fonts`
Do not load any fonts. This is useful to load GIMP faster for scripts that do not use fonts, or to find problems related to malformed fonts that hang GIMP.

### `-s`, `-no-splash`
Do not show the splash screen while starting.

### `--no-shm`
Do not use shared memory between GIMP and plugins.

### `--no-cpu-accel`
Do not use special CPU acceleration functions. Useful for finding or disabling buggy accelerated hardware or functions.

### `--session=name`
Use a different `sessionrc` for this GIMP session. The given session name is appended to the default `sessionrc` filename.

### `--gimprc=filename`
Use an alternative `gimprc` instead of the default one. The `gimprc` file contains a record of your preferences. Useful in cases where plugins paths or machine specs may be different.

### `--system-gimprc=filename`
Use an alternate system gimprc file

### `-b`, `--batch=commands`
Execute the set of commands non-interactively. The set of commands is typically in the form of a script that can be executed by one of the GIMP scripting extensions. When the command is `-`, commands are read from standard input.

### `--batch-interpreter=proc`
Specify the procedure to use to process batch commands. The default procedure is Script-Fu.

### `--console-messages`
Do not display dialog boxes on errors or warnings. Print the messages on the console instead.

### `--pdb-compat-mode=mode`
PDB compatibiliity mode (`off`|`on`|`warn`)

### `--stack-trace-mode=mode`
Debug in case of a crash (`never`|`query`|`always`)

### `--debug-handlers`
Enable non-fatal debugging signal handlers. Useful for GIMP debugging.

### `--g-fatal-warnings`
Make all warnings fatal. Useful for debugging.

### `--dump-gimprc`
Output a `gimprc` file with default settings. Useful if you messed up the `gimprc` file.

### `--display=display`
Use the designated X display (does not apply to all platforms).

### `--show-playground`
Show a [preference page](./12-01-06-experimental-playground.md) with experimental features.

[Home](./00-home.md)
[Parent: 2. Fire up GIMP](./02-00-fire-up-gimp.md)
[Prev: 1.2. What’s new in GIMP](./01-02-whats-new-in-gimp.md)
[Next: 2.2. Configuration Folders](./02-02-configuration-folders.md)