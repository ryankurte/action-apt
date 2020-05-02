import * as core from '@actions/core'
import exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    // Fetch incoming variables
    const architectures = core.getInput('architectures', {required: false})
    const packages = core.getInput('packages', {required: true})

    // Add architectures if specified
    if (architectures !== undefined) {
      await exec.exec(
        'dpkg',
        ['add-architecture'].concat(architectures.split(' '))
      )
    }

    // Update apt repository
    await exec.exec('apt-get', ['update'])

    // Install requested packages
    await exec.exec('apt-get', ['install', '-y'].concat(packages.split(' ')))
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
