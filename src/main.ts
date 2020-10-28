import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    // Fetch incoming variables
    const architectures = core.getInput('architectures', {required: false})
    const packages = core.getInput('packages', {required: true})

    // Add architectures if specified
    if (architectures !== undefined && architectures !== '') {
      // Patch apt to limit arch for azure repos
      await exec.exec('sudo', ['./patch-apt.sh', '/etc/apt/'])

      await exec.exec(
        'sudo',
        ['dpkg', '--add-architecture'].concat(architectures.split(' '))
      )
    }

    // Update apt repository
    await exec.exec('sudo', ['apt-get', 'update'])

    // Install requested packages
    await exec.exec(
      'sudo',
      ['apt-get', 'install', '-y'].concat(packages.split(' '))
    )
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
